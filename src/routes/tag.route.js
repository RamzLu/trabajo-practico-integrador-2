import { Router } from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  getTags,
  updateTag,
} from "../controllers/tag.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";

export const tagRouter = Router();

tagRouter.post("/tags", validateToken, authAdmin, createTag);
tagRouter.get("/tags", validateToken, getTags);
tagRouter.get("/tags/:id", validateToken, getTagById);
tagRouter.put("/tags/:id", validateToken, authAdmin, updateTag);
tagRouter.delete("/tags/:id", validateToken, authAdmin, deleteTag);
