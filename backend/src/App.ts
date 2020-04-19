import express = require('express');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private base64Decode = (apikey: string) => {
    console.log(apikey);
    const res = Buffer.from(apikey, 'base64').toString('utf-8');
    console.log(res);
    return res;
  }

  private mountRoutes = (): void => {
    const router = express.Router();
    this.express.use(express.json());

    router.get('/', (req: express.Request, res: express.Response) => {
      const apiKey: string = req.header('api-key') || '';
      if (this.base64Decode(apiKey) === API_KEY) {
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
