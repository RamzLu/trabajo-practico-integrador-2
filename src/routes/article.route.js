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
import { validator } from "../middlewares/validator.js";
import {
  createArticleValidation,
  deleteArticleValidation,
  getArticleByIdValidation,
  updateArticleValidation,
} from "../middlewares/validations/article.validations.js";
export const routeArticle = Router();

routeArticle.get("/articles/my", validateToken, getUserLogArticles);
routeArticle.post(
  "/articles",
  validateToken,
  createArticleValidation,
  validator,
  createArticle
);
routeArticle.get("/articles", validateToken, getAllArticles);

routeArticle.get(
  "/articles/:id",
  validateToken,
  getArticleByIdValidation,
  validator,
  getArticleById
);
routeArticle.put(
  "/articles/:id",
  validateToken,
  ownerOrAdmin(ArticleModel),
  updateArticleValidation,
  validator,
  updateArticle
);
routeArticle.delete(
  "/articles/:id",
  validateToken,
  ownerOrAdmin(ArticleModel),
  deleteArticleValidation,
  validator,
  deleteArticle
);
