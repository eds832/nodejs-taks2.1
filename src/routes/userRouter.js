import express from 'express';
import { saveUser, getUser, getUsers, updateUser, removeUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/', saveUser);
userRouter.get('/:id', getUser);
userRouter.get('/', getUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', removeUser);

export default userRouter;
