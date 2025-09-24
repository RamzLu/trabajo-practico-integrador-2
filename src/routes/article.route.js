import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleById,
  getUserLogArticles,
  updateArticle,
} from "../controllers/article.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";
import { ArticleModel } from "../models/article.model.js";
export const routeArticle = Router();

routeArticle.get("/articles/my", validateToken, getUserLogArticles);
routeArticle.post("/articles", validateToken, createArticle);
routeArticle.get("/articles", validateToken, getAllArticles);
routeArticle.get("/articles/:id", validateToken, getArticleById);
routeArticle.put(
  "/articles/:id",
  validateToken,
  ownerOrAdmin(ArticleModel),
  updateArticle
);
routeArticle.delete(
  "/articles/:id",
  validateToken,
  ownerOrAdmin(ArticleModel),
  deleteArticle
);
