import {Request, Response} from "express";
import GiftService from "../../service/GiftService";
import { v4 as uuidv4 } from "uuid";
import { GiftAttributes, GiftModel, Gift } from "../../models/GiftModel";

export class GiftController {

  private service: GiftService = new GiftService();
  
  GetGifts = async (req: Request, res: Response)=>{
    //TODO: Dodaj query parametre za filter, paging, count od svih giftova sa tim filterom
    const result = await this.service.GetAllGifts();
    if(result)
      return res.status(200).json(result);

    return res.status(404);
  }

  GetSingleGift = async (req: Request, res: Response)=>{
    const result = await this.service.GetGiftById(req.params.id);
    if(result)
      return res.status(200).json(result);

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
    return res.status(200).json(result);

    return res.status(404);
  };

  UpdateGift = async (req: Request, res: Response)=>{
    const user = res.locals.user;
    const id = req.params.id;
    const gift = {
      Id: id,
      Name: req.body.Name,
      Quantity: req.body.Quantity,
      Description: req.body.Description,
      Image: req.body.Image
    }
    const result = await this.service.UpdateGift(id, gift);
    return res.status(200).json(result);

    return res.status(404);
  }

  DeleteGift = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const gift = await this.service.GetGiftById(req.params.id);
    if(!gift)
      return res.status(404);

    const result = await this.service.DeleteGift(id);
    return res.status(200).json(result);

  }
}