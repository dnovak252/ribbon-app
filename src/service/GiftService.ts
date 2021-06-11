import { dbGift } from "../models";
import { Gift, GiftModel, GiftAttributes } from "../models/GiftModel";

export default class GiftService{
  GetAllGifts = (): Promise<GiftModel[]>=>{
    console.dir(Gift)
    return dbGift.findAll();
  };

  GetGiftById = (id: string): Promise<GiftModel | null>=> {
    return dbGift.findByPk(id);
  };

  InsertGift = (gift: GiftAttributes): Promise<GiftModel> => {
    return dbGift.create(gift);
  };

  UpdateGift = (id: string, gift: GiftAttributes): Promise<[number, GiftModel[]]> => {
    return dbGift.update(gift, {where: {Id: id}});
  };
  
  DeleteGift = (id: string): Promise<number> => {
    return dbGift.destroy({where:{Id: id}});   
  };
}