import {Router} from 'express';
import {GiftController} from "../controllers/GiftController";

const giftRouter = Router();
const giftController = new GiftController();

giftRouter.get('/', giftController.GetGifts);

giftRouter.get('/:id', giftController.GetSingleGift);

giftRouter.post('/', giftController.CreateGift);

giftRouter.put("/:id", giftController.UpdateGift);

giftRouter.delete('/:id', giftController.DeleteGift);

export default giftRouter;