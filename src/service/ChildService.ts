import { dbChild } from "../models";
import { Child, ChildAttributes, ChildModel } from "../models/ChildModel";

export default class ChildService {
  GetAllChildren = (): Promise<ChildModel[]> => {
    console.dir(Child);
    return dbChild.findAll();
  };

  GetChildById = (childId: string): Promise<ChildModel | null> => {
    return dbChild.findByPk(childId);
  };

  GetChildrenByUserId = (userId: string): Promise<ChildModel | null> => {
    return dbChild.findByPk(userId);
  };

  CreateChild = (user: ChildAttributes): Promise<ChildAttributes> => {
    return dbChild.create(user);
  };

  DeleteChild = (id: string): Promise<number> => {
    return dbChild.destroy({ where: { Id: id } });
  };
}
