import {Request, Response} from "express";

export class GiftController {

  GetGifts = (req: Request, res: Response)=>{
    const test = req.query;
    console.log(test);
  }

  GetSingleGift = (req: Request, res: Response)=>{
    const test = req.params.id;
    res.send ({
      message : "Gift number " + test
    })
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