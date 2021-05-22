import {Request, Response} from "express";
import GiftService from "../../service/GiftService"

export class GiftController {

  private service: GiftService = new GiftService();
  GetGifts = async (req: Request, res: Response)=>{
    const result = await this.service.GetAllGifts(req.query.searchTerm!.toString());
    return res.status(200).json(result)
  }

  GetSingleGift = async (req: Request, res: Response)=>{
    const gift = await this.service.GetGiftById(req.params.id);
    if(gift)
      return res.status(200).json(gift);

    return res.status(404);
  }

  CreateGift = (req: Request, res: Response)=>{
    const test = req.body;
    res.json(test);
  }

  UpdateGift = (req: Request, res: Response)=>{
    const id = req.params.id;
    res.send ({
      message : "Update on "+ id +" successful."
    })
  }

  DeleteGift = (req: Request, res: Response)=>{
    res.send("DELETE request for " + req.params.id);
  }
}