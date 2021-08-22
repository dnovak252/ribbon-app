import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import auth from "../middlewares/auth";

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get("/", auth, orderController.GetOrders);

orderRouter.get("/order", auth, orderController.GetSingleOrder);

orderRouter.post("/", auth, orderController.CreateOrder);

orderRouter.delete("/:id", auth, orderController.DeleteOrder);

export default orderRouter;
