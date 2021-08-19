import { dbGiftOrder } from "../models";
import {
  GiftOrder,
  GiftOrderModel,
  GiftOrderAttributes,
} from "../models/OrderModel";

export default class GiftOrderService {
  GetAllOrders = (): Promise<GiftOrderModel[]> => {
    return dbGiftOrder.findAll();
  };

  GetOrderById = (id: string): Promise<GiftOrderModel | null> => {
    return dbGiftOrder.findByPk(id);
  };

  InsertOrder = (wishlist: GiftOrderAttributes): Promise<GiftOrderModel> => {
    return dbGiftOrder.create(wishlist);
  };

  DeleteOrder = (id: string): Promise<number> => {
    return dbGiftOrder.destroy({ where: { Id: id } });
  };
}
