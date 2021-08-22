import { Router } from "express";
import { GiftController } from "../controllers/GiftController";
import auth from "../middlewares/auth";

const giftRouter = Router();

const giftController = new GiftController();

giftRouter.get("/", auth, giftController.GetGifts);

giftRouter.get("/:id", auth, giftController.GetSingleGift);

giftRouter.post("/", auth, giftController.CreateGift);

giftRouter.put("/:id", auth, giftController.UpdateGift);

giftRouter.delete("/:id", auth, giftController.DeleteGift);

export default giftRouter;
