import { Router } from 'express';
import sessionControlller from '../controllers/SessionController';

const sessionRouter = Router();

sessionRouter.post('/', sessionControlller.store);

export default sessionRouter;
