import {userCollection} from "../global/_mongodb-connect";
import { ObjectId } from "mongodb";
import {MongoUserModel} from "../../models/users/MongoUserModel";
import {
  MongoUserModelWithStringId
} from "../../models/users/MongoUserModelWithStringId";

export const usersRepository = {
  // Create new user
  async createNewUser(
    user: MongoUserModel
  ): Promise<MongoUserModelWithStringId> {
    const insertedUser = await userCollection.insertOne(user);

    return {
      id: insertedUser.insertedId.toString(),
      login: user.login,
      email: user.email,
      createdAt: user.createdAt,
    };
  },

  // Delete existing user
  async deleteUser(_id: ObjectId): Promise<boolean> {
    const result = await userCollection.deleteOne({ _id });
    return result.deletedCount === 1;
  },
};