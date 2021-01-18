import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './routes/homeRoutes';

dotenv.config();
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/home', homeRoutes);
  }
}

export default new App().app;
