import {Request, Response} from "express";
import GiftService from "../../service/GiftService"

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
    const gift = await this.service.InsertGift(req.body);
    res.json(gift);
  }

  UpdateGift = async (req: Request, res: Response)=>{
    const gift = await this.service.UpdateGift(req.body);
    await gift.save();
    res.json(gift);
  }

  DeleteGift = (req: Request, res: Response)=>{
    res.send("DELETE request for " + req.params.id);
  }
}