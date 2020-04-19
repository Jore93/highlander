import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import {logLine} from './helpers';
import {getLanguages, postLanguages} from './endpoints/languages';
import db from './db';

const tableNames = [
  {
    name: 'highlander_languages',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, language VARCHAR(127) NOT NULL, level VARCHAR(127) NOT NULL'
  },
  {
    name: 'highlander_workhistory',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, position VARCHAR(127) NOT NULL, employer VARCHAR(127) NOT NULL, duration VARCHAR(127) NOT NULL'
  },
  {
    name: 'highlander_education',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(127) NOT NULL, place VARCHAR(127) NOT NULL, duration VARCHAR(127) NOT NULL'
  },
  {
    name: 'highlander_positions',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, position VARCHAR(127) NOT NULL, duration VARCHAR(127) NOT NULL, organisation VARCHAR(127) NOT NULL'
  },
  {
    name: 'highlander_pastParagraph',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, content TEXT NOT NULL'
  },
  {
    name: 'highlander_futureParagraph',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, content TEXT NOT NULL'
  },
];

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.initExpress();
    this.initDB();
    this.mountRoutes();
  }

  private initExpress = () => {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: true}));
    this.express.use(cors());
  }

  private initDB = () => {
    tableNames.map(table => {
      db.initDbTable(table.name, table.columns);
    });
  }

  private mountRoutes = (): void => {
    const router = express.Router();

    router.get('/languages', getLanguages);
    router.post('/languages', postLanguages);

    this.express.use('/', router);
    this.express.use('/languages', router);
  }
}

export default new App().express;
