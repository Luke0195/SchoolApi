import { Router } from 'express';
import homeController from '../controllers/HomeController';

const homeRoutes = new Router();

homeRoutes.post('/', homeController.store);

export default homeRoutes;
