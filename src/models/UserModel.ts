import { sequelize } from "./index";


export interface UserAttributes{
  Id?: number,
  FirstName?: string,
  LastName?: string,
  Email?: string,
  Username?: string,
  Password?: string
};

export interface UserInstance extends sequelize.Instance <UserAttributes>, UserAttributes{

};