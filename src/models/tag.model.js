import { model, Schema } from "mongoose";

const tagSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minlength: 2,
    maxlength: 30,
    required: true,
    match: [/^\S+$/, "El tag no puede contener espacios"],
  },
  description: {
    type: String,
    maxlength: 200,
  },
});

export const TagModel = model("Tag", tagSchema);
