import {Router} from 'express';
import giftRouter from './GiftRouter';


const router = Router();

router.use("/gifts", giftRouter);

export default router;