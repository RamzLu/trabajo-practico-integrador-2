import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", validateToken, logout);
