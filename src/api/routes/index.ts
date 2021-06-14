import {Router} from 'express';
import giftRouter from './GiftRouter';
import userRouter from './UserRouter';


const router = Router();

router.use("/gifts", giftRouter);
router.use("/users", userRouter);

export default router;