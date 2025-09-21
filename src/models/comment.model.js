import { model, Schema, Types } from "mongoose";

const commentSchema = new Schema({
  content: {
    type: String,
    minlength: 5,
    maxlength: 500,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  //   * RELACIÓN 1:N con Article
  article: {
    type: Types.ObjectId,
    ref: "Article",
    required: true,
  },
});

export const CommentModel = model("Comment", commentSchema);
