import express = require('express');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes = (): void => {
    const router = express.Router();
    this.express.use(express.json());

    router.get('/', (req: express.Request, res: express.Response) => {
      if (req.header('api-key') === API_KEY) {
        res.status(200).send({
          message: 'Server is alive',
        });
      } else {
        res.status(403).send({
          message: 'Server is alive, but you cannot access it'
        });
      }
    });
    this.express.use('/', router);
  }
}

export default new App().express;
