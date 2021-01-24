import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const userRouter = Router();

// userRouter.get('/', userController.index);
// userRouter.get('/:id', loginRequired, userController.show);
userRouter.post('/', userController.store);
userRouter.put('/', loginRequired, userController.update);
userRouter.delete('/', loginRequired, userController.delete);

export default userRouter;
