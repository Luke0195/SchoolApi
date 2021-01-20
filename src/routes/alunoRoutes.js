import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const alunosRouter = Router();

alunosRouter.post('/', alunoController.store);
alunosRouter.get('/', alunoController.index);

export default alunosRouter;
