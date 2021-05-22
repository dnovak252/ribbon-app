import { dbGift } from "../models";
import { Gift, GiftModel } from "../models/GiftModel";

export default class GiftService{
  GetAllGifts = (searchTerm: string): Promise<GiftModel[]>=>{
    console.dir(Gift)
    return dbGift.findAll({where: {Name: searchTerm}});
  };

  GetGiftById = (id: string): Promise<GiftModel | null>=> {
    return dbGift.findByPk(id)
  };

  InsertGift = () => {
  };

  UpdateGift = () =>{

  };

  DeleteGift = () =>{

  };
}