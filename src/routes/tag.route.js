import { Router } from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  getTags,
  updateTag,
} from "../controllers/tag.controller.js";

export const tagRouter = Router();

tagRouter.post("/tags", createTag);
tagRouter.get("/tags", getTags);
tagRouter.delete("/tags/:id", deleteTag);
tagRouter.put("/tags/:id", updateTag);
tagRouter.get("/tags/:id", getTagById);
