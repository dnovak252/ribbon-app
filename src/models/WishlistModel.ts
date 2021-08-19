import {
  BuildOptions,
  DataTypes,
  IntegerDataType,
  Model,
  Sequelize,
} from "sequelize";

export interface WishlistAttributes {
  Id: string;
  UserId: string;
  GiftName: number;
  GiftDescription: string;
}

export interface WishlistModel
  extends Model<WishlistAttributes>,
    WishlistAttributes {}
export class Wishlist extends Model<WishlistModel, WishlistAttributes> {}

export type WishlistStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): WishlistModel;
};

export function WishlistFactory(sequelize: Sequelize): WishlistStatic {
  return <WishlistStatic>sequelize.define(
    "wishlist",
    {
      Id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.STRING,
      },
      GiftName: {
        type: DataTypes.NUMBER,
      },
      GiftDescription: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
}
