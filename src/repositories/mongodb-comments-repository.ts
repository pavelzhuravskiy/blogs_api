import { commentsCollection } from "./_mongodb-connect";
import { MongoCommentModel } from "../models/comments/MongoCommentModel";
import { MongoCommentModelWithStringId } from "../models/comments/MongoCommentModelWithStringId";
import { ObjectId } from "mongodb";

export const commentsRepository = {
  // Create new comment
  async createNewComment(
    newComment: MongoCommentModel
  ): Promise<boolean | MongoCommentModelWithStringId> {
    const insertedComment = await commentsCollection.insertOne(newComment);

    return {
      id: insertedComment.insertedId.toString(),
      content: newComment.content,
      commentatorInfo: {
        userId: newComment.commentatorInfo.userId,
        userLogin: newComment.commentatorInfo.userLogin,
      },
      createdAt: newComment.createdAt,
    };
  },

  // Update existing comment
  async updateComment(_id: ObjectId, content: string): Promise<boolean> {
    const result = await commentsCollection.updateOne(
      { _id },
      {
        $set: {
          content: content,
        },
      }
    );
    return result.matchedCount === 1;
  },
};