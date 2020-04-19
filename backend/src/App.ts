import express = require('express');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

class App {
  public express: express.Application; //express.Express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes = (): void => {
    const router = express.Router();
    this.express.use(express.json());

    router.get('/', (req: express.Request, res: express.Response) => {
      if (req.header('api-key') === API_KEY) {
        res.send({
          message: 'Server is alive',
        }).status(200);
      } else {
        res.send({
          message: 'Server is alive, but you cannot access it'
        }).status(200);
      }
    });
    this.express.use('/', router);
  }
}

export default new App().express;
