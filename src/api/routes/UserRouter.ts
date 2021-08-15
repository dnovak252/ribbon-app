import { Router } from "express";
import { UserController } from "../controllers/UserController";
import auth from "../middlewares/auth";
import cors from "cors";

const userRouter = Router();
const userController = new UserController();
userRouter.use(cors());

userRouter.get("/", auth, userController.GetAllUsers);

userRouter.post("/signup", userController.UserSignUp);

userRouter.post("/login", userController.UserLogin);

export default userRouter;
