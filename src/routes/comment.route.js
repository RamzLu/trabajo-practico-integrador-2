import { Router } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  getUserLogComments,
  updateComment,
} from "../controllers/comment.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";

export const routeComment = Router();

routeComment.get("/comments/my", validateToken, getUserLogComments);
routeComment.post("/comments", validateToken, createComment);
routeComment.get("/comments", validateToken, getAllComments);
routeComment.put("/comments/:id", validateToken, updateComment);
routeComment.delete("/comments/:id", validateToken, deleteComment);
routeComment.get("/comments/:id", validateToken, getCommentById);
