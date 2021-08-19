import { Request, Response } from "express";
import ChildService from "../../service/ChildService";
import { v4 as uuidv4 } from "uuid";
import { Child, ChildAttributes, ChildModel } from "../../models/ChildModel";

export class ChildController {
  private service: ChildService = new ChildService();

  GetChildren = async (req: Request, res: Response) => {
    //TODO: Dodaj query parametre za filter, paging, count od svih giftova sa tim filterom
    const result = await this.service.GetAllChildren();
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  CreateChild = async (req: Request, res: Response) => {
    let childId = uuidv4();
    const child = {
      Id: childId,
      UserId: req.body.UserId,
      Age: req.body.Age,
      Name: req.body.Name,
    };
    const result = await this.service.CreateChild(child);
    return res.status(200).json(result);

    return res.status(404);
  };

  DeleteChild = async (req: Request, res: Response) => {
    const id = req.params.id;
    const child = await this.service.GetChildById(req.params.id);
    if (!child) return res.status(404);

    const result = await this.service.DeleteChild(id);
    return res.status(200).json(result);
  };
}
