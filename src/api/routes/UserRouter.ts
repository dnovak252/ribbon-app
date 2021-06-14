import {Router} from 'express';
import {UserController} from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.GetAllUsers);

userRouter.post("/signup", userController.UserSignUp);

userRouter.post("/login", userController.UserLogin);

export default userRouter;