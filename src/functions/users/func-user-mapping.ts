import { MongoUserModelWithId } from "../../models/users/MongoUserModelWithId";

export const funcUserMapping = (array: MongoUserModelWithId[]) => {
  return array.map((user) => {
    return {
      id: user._id.toString(),
      login: user.login,
      email: user.email,
      createdAt: user.createdAt,
    };
  });
};