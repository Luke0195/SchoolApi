import dotenv from 'dotenv';
import express from 'express';

import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes';
import alunoRoutes from './routes/alunoRoutes';
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
    this.app.use('/users', userRoutes);
    this.app.use('/sessions', sessionRoutes);
    this.app.use('/alunos', alunoRoutes);
  }
}

export default new App().app;
