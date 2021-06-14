import { dbUser } from "../models";
import { User, UserModel, UserAttributes } from "../models/UserModel";

export default class UserService{
  GetAllUsers = (): Promise<UserModel[]>=>{
    console.dir(User)
    return dbUser.findAll();
  };

  GetUserById = (id: string): Promise<UserModel | null> => {
    return dbUser.findByPk(id);
  };
  
  GetUserByEmail = (email: string): Promise<UserModel | null> => {
    return dbUser.findOne({where:{Email: email}});
  }

  GetUserByUsername = (username: string): Promise<UserModel | null> =>{
    return dbUser.findOne({where: {Username: username}});
  }

  CreateUser = (user: UserAttributes, ): Promise<UserAttributes> => {
    return dbUser.create(user);
  };

  UpdateUser = (id: string, user: UserAttributes): Promise<[number, UserModel[]]> => {
    return dbUser.update(user, {where: {Id: id}});
  };
  
  DeleteUser = (id: string): Promise<number> => {
    return dbUser.destroy({where:{Id: id}});   
  };
}