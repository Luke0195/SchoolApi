import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import delay from 'express-delay';
import helmet from 'helmet';
import { resolve } from 'path';

import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';
import './database';

dotenv.config();

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cors'));
    }
  },
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(delay(2000));
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/sessions', sessionRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/photos', photoRoutes);
  }
}

export default new App().app;
