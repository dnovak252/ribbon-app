import { Request, Response } from "express";
import OrderService from "../../service/OrderService";
import { v4 as uuidv4 } from "uuid";
import {
  GiftOrder,
  GiftOrderModel,
  GiftOrderAttributes,
} from "../../models/OrderModel";

export class OrderController {
  private service: OrderService = new OrderService();

  GetOrders = async (req: Request, res: Response) => {
    //TODO: Dodaj query parametre za filter, paging, count od svih giftova sa tim filterom
    const result = await this.service.GetAllOrders();
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  GetSingleOrder = async (req: Request, res: Response) => {
    const result = await this.service.GetOrderById(req.params.id);
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  CreateOrder = async (req: Request, res: Response) => {
    let orderId = uuidv4();
    const order = {
      Id: orderId,
      GiftId: req.body.GiftId,
      UserId: req.body.UserId,
    };
    const result = await this.service.InsertOrder(order);
    return res.status(200).json(result);

    return res.status(404);
  };

  DeleteOrder = async (req: Request, res: Response) => {
    const id = req.params.id;
    const order = await this.service.GetOrderById(req.params.id);
    if (!order) return res.status(404);

    const result = await this.service.DeleteOrder(id);
    return res.status(200).json(result);
  };
}
