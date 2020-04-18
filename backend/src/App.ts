import express from 'express';

class App {
  public express: any;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes = (): void => {
    const router = express.Router();
    router.get('/', (req: Request, res: any) => {
      res.json({
        message: 'Server is alive',
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;
