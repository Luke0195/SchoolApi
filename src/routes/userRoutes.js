import { Router } from 'express';
import userController from '../controllers/UserController';

const userRouter = Router();

userRouter.post('/', userController.store);
userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;
