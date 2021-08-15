import { dbConfig, dbUser } from "../models";
import { Child, ChildAttributes } from "../models/ChildModel";
import { User, UserModel, UserAttributes } from "../models/UserModel";

export default class UserService {
  GetAllUsers = (): Promise<UserModel[]> => {
    console.dir(User);
    return dbUser.findAll();
  };

  GetUserById = (id: string): Promise<UserModel | null> => {
    return dbUser.findByPk(id);
  };

  GetUserByEmail = (email: string): Promise<UserModel | null> => {
    return dbUser.findOne({ where: { Email: email } });
  };

  GetUserByUsername = (username: string): Promise<UserModel | null> => {
    return dbUser.findOne({ where: { Username: username } });
  };

  CreateUser = (user: UserAttributes): Promise<UserAttributes> => {
    return dbUser.create(user);
  };

  CreateUserChilder = (userId: string, children: ChildAttributes[]) => {
    children.forEach((x) => (x.UserId = userId));

    return Child.bulkCreate(children);
  };

  CreateUserWithChildren = async (
    user: UserAttributes,
    children: ChildAttributes[]
  ) => {
    const transaction = await dbConfig.transaction();

    try {
      const createdUser = await dbUser.create(user, {
        transaction: transaction,
      });

      children.forEach((x) => (x.UserId = createdUser.Id));

      await Child.bulkCreate(children, { transaction: transaction });

      await transaction.commit();
    } catch (error) {
      transaction.rollback();
    }
  };

  UpdateUser = (
    id: string,
    user: UserAttributes
  ): Promise<[number, UserModel[]]> => {
    return dbUser.update(user, { where: { Id: id } });
  };

  DeleteUser = (id: string): Promise<number> => {
    return dbUser.destroy({ where: { Id: id } });
  };
}
