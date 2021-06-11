import {Request, Response} from "express";
import GiftService from "../../service/GiftService";
import { v4 as uuidv4 } from "uuid";
import { GiftAttributes, GiftModel, Gift } from "../../models/GiftModel";

export class GiftController {

  private service: GiftService = new GiftService();
  GetGifts = async (req: Request, res: Response)=>{
    const result = await this.service.GetAllGifts();
    return res.status(200).json(result)
  }

  GetSingleGift = async (req: Request, res: Response)=>{
    const gift = await this.service.GetGiftById(req.params.id);
    if(gift)
      return res.status(200).json(gift);

    return res.status(404);
  }

  CreateGift = async (req: Request, res: Response)=>{
    let giftId = uuidv4();
    const gift = {
      Id: giftId,
      Name: req.body.Name,
      Quantity: req.body.Quantity,
      Description: req.body.Description,
      Image: req.body.Image
    }
    const result = await this.service.InsertGift(gift);
    return res.status(200).json(result)
  };

  UpdateGift = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const gift = {
      Id: id,
      Name: req.body.Name,
      Quantity: req.body.Quantity,
      Description: req.body.Description,
      Image: req.body.Image
    }
    await this.service.UpdateGift(id, gift);
  }

  DeleteGift = (req: Request, res: Response)=>{
    const id = req.params.id;
    const result = this.service.DeleteGift(id);
  }
}