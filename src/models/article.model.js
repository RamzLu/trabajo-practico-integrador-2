import { model, Schema, Types } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
  },
  content: {
    type: String,
    minlength: 50,
    required: true,
  },
  excerpt: {
    type: String,
    minlength: 50,
  },
  status: {
    type: String,
    enum: ["published", "archived"],
    default: "published",
  },
  // RELACIÓN 1:N con User
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: {
    type: [Types.ObjectId],
    ref: "Tag",
  },
});

export const ArticleModel = model("Article", articleSchema);
