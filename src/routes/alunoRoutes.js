import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const alunosRouter = Router();

alunosRouter.post('/', loginRequired, alunoController.store);
alunosRouter.get('/', alunoController.index);
alunosRouter.get('/:id', alunoController.show);
alunosRouter.put('/:id', loginRequired, alunoController.update);
alunosRouter.delete('/:id', loginRequired, alunoController.delete);

export default alunosRouter;
