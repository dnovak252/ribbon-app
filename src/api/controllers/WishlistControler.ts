import { Request, Response } from "express";
import WishlistService from "../../service/WishlistService";
import { v4 as uuidv4 } from "uuid";
import {
  Wishlist,
  WishlistModel,
  WishlistAttributes,
} from "../../models/WishlistModel";

export class WishlistController {
  private service: WishlistService = new WishlistService();

  GetWishlist = async (req: Request, res: Response) => {
    //TODO: Dodaj query parametre za filter, paging, count od svih giftova sa tim filterom
    const result = await this.service.GetAllWishlists();
    if (result) return res.status(200).json(result);

    return res.status(404);
  };

  CreateWishlist = async (req: Request, res: Response) => {
    let wishlistId = uuidv4();
    const wishlist = {
      Id: wishlistId,
      UserId: req.body.UserId,
      GiftName: req.body.GiftName,
      GiftDescription: req.body.GiftDescription,
    };
    const result = await this.service.InsertWishlist(wishlist);
    return res.status(200).json(result);

    return res.status(404);
  };

  DeleteWishlist = async (req: Request, res: Response) => {
    const id = req.params.id;
    const wishlist = await this.service.GetWishlistById(req.params.id);
    if (!wishlist) return res.status(404);

    const result = await this.service.DeleteWishlist(id);
    return res.status(200).json(result);
  };
}
