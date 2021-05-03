import {Router} from 'express';
import {GiftController} from "../controllers/GiftController";

const giftRouter = Router();
const giftController = new GiftController();

giftRouter.get('/all', giftController.GetGifts);

giftRouter.get('/:id', giftController.GetSingleGift);

giftRouter.post('/create', giftController.CreateGift);

giftRouter.put("/update/:id", giftController.UpdateGift);

giftRouter.delete('/delete/:id', giftController.DeleteGift);

export default giftRouter;