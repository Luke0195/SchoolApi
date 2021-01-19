import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const userRouter = Router();

userRouter.post('/', userController.store);
userRouter.get('/', loginRequired, userController.index);
userRouter.get('/:id', loginRequired, userController.show);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;
