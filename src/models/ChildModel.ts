import { BuildOptions, DataTypes, IntegerDataType, Model, Sequelize } from "sequelize";

export interface ChildAttributes {
  Id: string,
  UserId: string,
  Age: number,
  Name: string,
}

export interface ChildModel extends Model<ChildAttributes>, ChildAttributes{};
export class Child extends Model<ChildModel, ChildAttributes>{};

export type ChildStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ChildModel;
};

export function ChildFactory (sequelize: Sequelize): ChildStatic{
  return <ChildStatic>sequelize.define("userchild", {
    Id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.STRING
    },
    Age: {
      type: DataTypes.NUMBER
    },
    Name: {
      type: DataTypes.STRING
    }
  }, {timestamps: false, freezeTableName: true});
}