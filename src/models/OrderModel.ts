import {
  BuildOptions,
  DataTypes,
  IntegerDataType,
  Model,
  Sequelize,
} from "sequelize";

export interface GiftOrderAttributes {
  Id: string;
  UserId: string;
  GiftId: string;
}

export interface GiftOrderModel
  extends Model<GiftOrderAttributes>,
    GiftOrderAttributes {}
export class GiftOrder extends Model<GiftOrderModel, GiftOrderAttributes> {}

export type GiftOrderStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GiftOrderModel;
};

export function GiftOrderFactory(sequelize: Sequelize): GiftOrderStatic {
  return <GiftOrderStatic>sequelize.define(
    "giftorder",
    {
      Id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.STRING,
      },
      GiftId: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
}
