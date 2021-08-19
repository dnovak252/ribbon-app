import { dbWishlist } from "../models";
import {
  Wishlist,
  WishlistModel,
  WishlistAttributes,
} from "../models/WishlistModel";

export default class WishlistService {
  GetAllWishlists = (): Promise<WishlistModel[]> => {
    console.dir(Wishlist);
    return dbWishlist.findAll();
  };

  GetWishlistById = (id: string): Promise<WishlistModel | null> => {
    return dbWishlist.findByPk(id);
  };

  InsertWishlist = (wishlist: WishlistAttributes): Promise<WishlistModel> => {
    return dbWishlist.create(wishlist);
  };

  DeleteWishlist = (id: string): Promise<number> => {
    return dbWishlist.destroy({ where: { Id: id } });
  };
}
