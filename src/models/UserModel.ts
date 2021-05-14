import { BuildOptions, DataTypes, IntegerDataType, Model, Sequelize } from "sequelize";

export interface UserAttributes {
  Id: string,
  FirstName: string,
  LastName: string,
  Email: string,
  Username: string,
  Password: string
}

export interface UserModel extends Model<UserAttributes>, UserAttributes{};
export class User extends Model<UserModel, UserAttributes>{};

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory (sequelize: Sequelize): UserStatic{
  return <UserStatic>sequelize.define("users", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    Email: {
      type: DataTypes.STRING
    },
    Username: {
      type: DataTypes.STRING
    },
    Password: {
      type: DataTypes.STRING
    },
  });
}