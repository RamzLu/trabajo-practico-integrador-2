import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentsByArticle,
  getUserLogComments,
  updateComment,
} from "../controllers/comment.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";

export const routeComment = Router();

routeComment.get("/comments/my", validateToken, getUserLogComments);
routeComment.post("/comments", validateToken, createComment);
routeComment.get("/comments", validateToken, getAllComments);
routeComment.put("/comments/:id", validateToken, ownerOrAdmin, updateComment);
routeComment.delete(
  "/comments/:id",
  validateToken,
  ownerOrAdmin,
  deleteComment
);

routeComment.get(
  "/comments/article/:articleId",
  validateToken,
  getCommentsByArticle
);
