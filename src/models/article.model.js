import { model, Schema, Types } from "mongoose";
import { UserModel } from "./user.model.js";
import { TagModel } from "./tag.model.js";

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
  //* RELACIÓN 1:N con User
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator: async function (value) {
        const existAuhtor = await UserModel.findById(value);
        return !!existAuhtor;
      },
      message: "El autor referenciado no existe.",
    },
  },
  //* RELACIÓN N:M con Tag
  tags: {
    type: [Types.ObjectId],
    ref: "Tag",
  },
});

export const ArticleModel = model("Article", articleSchema);
