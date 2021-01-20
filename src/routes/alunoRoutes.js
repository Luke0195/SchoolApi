import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const alunosRouter = Router();

alunosRouter.post('/', alunoController.store);
alunosRouter.get('/', alunoController.index);
alunosRouter.get('/:id', alunoController.show);
alunosRouter.put('/:id', alunoController.update);
alunosRouter.delete('/:id', alunoController.delete);

export default alunosRouter;
