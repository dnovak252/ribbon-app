import { BuildOptions, DataTypes, IntegerDataType, Model, Sequelize } from "sequelize";

export interface GiftAttributes {
  Id: string,
  Name: string,
  Quantity: number,
  Description: string,
  Image: string
}

export interface GiftModel extends Model<GiftAttributes>, GiftAttributes{};
export class Gift extends Model<GiftModel, GiftAttributes>{};

export type GiftStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GiftModel;
};

export function GiftFactory (sequelize: Sequelize): GiftStatic{
  return <GiftStatic>sequelize.define("gift", {
    Id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING
    },
    Quantity: {
      type: DataTypes.NUMBER
    },
    Description: {
      type: DataTypes.STRING
    },
    Image: {
      type: DataTypes.STRING
    }
  }, {timestamps: false, freezeTableName: true});
}