import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import {logLine} from './helpers';
import {getLanguages, postLanguages} from './endpoints/languages';
import db from './db';
import {getEducations, postEducations} from './endpoints/education';
import {getPositions, postPositions} from './endpoints/positions';
import {getWorkhistory, postWorkhistory} from './endpoints/workhistory';
import {getParagraphs, postParagraphs} from './endpoints/paragraph';


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
    name: 'highlander_paragraphs',
    columns: 'id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(127) NOT NULL, content TEXT NOT NULL'
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
    logLine(`Connection limit is ${db.getConnectionLimit()}`);
  }

  private mountRoutes = (): void => {
    const router = express.Router();

    router.get('/languages', getLanguages);
    router.post('/languages', postLanguages);

    router.get('/education', getEducations);
    router.post('/education', postEducations);

    router.get('/positions', getPositions);
    router.post('/positions', postPositions);

    router.get('/workhistory', getWorkhistory);
    router.post('/workhistory', postWorkhistory);

    router.get('/paragraphs', getParagraphs);
    router.post('/paragraphs', postParagraphs);

    this.express.use('/', router);
  }
}

export default new App().express;
