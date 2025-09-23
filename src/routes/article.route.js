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
export const routeArticle = Router();

routeArticle.get("/articles/my", validateToken, getUserLogArticles);
routeArticle.get("/articles", validateToken, getAllArticles);
routeArticle.get("/articles/:id", validateToken, getArticleById);
routeArticle.post("/articles", validateToken, createArticle);
routeArticle.delete("/articles/:id", validateToken, deleteArticle);
routeArticle.put("/articles/:id", validateToken, updateArticle);
