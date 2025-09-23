import { Router } from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  getTags,
  updateTag,
} from "../controllers/tag.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";

export const tagRouter = Router();

tagRouter.post("/tags", validateToken, createTag);
tagRouter.get("/tags", validateToken, getTags);
tagRouter.delete("/tags/:id", validateToken, deleteTag);
tagRouter.put("/tags/:id", validateToken, updateTag);
tagRouter.get("/tags/:id", validateToken, getTagById);
