import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import './database';

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
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
