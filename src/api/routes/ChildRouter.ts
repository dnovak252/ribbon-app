import { Router } from "express";
import { ChildController } from "../controllers/ChildController";
import auth from "../middlewares/auth";

const childRouter = Router();
childRouter.use(auth);

const childController = new ChildController();

childRouter.get("/", auth, childController.GetChildren);

childRouter.post("/", auth, childController.CreateChild);

childRouter.delete("/:id", auth, childController.DeleteChild);

export default childRouter;
