import { dbGift } from "../models";
import { Gift, GiftModel, GiftAttributes } from "../models/GiftModel";

export default class GiftService {
  GetAllGifts = async (
    filter: string | undefined,
    page: number,
    rpp: number
  ): Promise<GetAllGiftsType> => {
    console.dir(Gift);
    const gifts = await dbGift.findAndCountAll({
      limit: rpp,
      offset: (page - 1) * rpp,
    });
    return { item: gifts.rows, page, rpp, filter, totalItems: gifts.count };
  };

  GetGiftById = (id: string): Promise<GiftModel | null> => {
    return dbGift.findByPk(id);
  };

  InsertGift = (gift: GiftAttributes): Promise<GiftModel> => {
    return dbGift.create(gift);
  };

  UpdateGift = (
    id: string,
    gift: GiftAttributes
  ): Promise<[number, GiftModel[]]> => {
    return dbGift.update(gift, { where: { Id: id } });
  };

  DeleteGift = (id: string): Promise<number> => {
    return dbGift.destroy({ where: { Id: id } });
  };
}

type GetAllGiftsType = {
  item: GiftModel[];
  page: number;
  rpp: number;
  filter: string | undefined;
  totalItems: number;
};
