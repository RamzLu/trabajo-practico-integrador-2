import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { authAdmin } from "../middlewares/authAdminMiddleware.js";

export const routeUser = Router();

routeUser.delete("/users/:id", validateToken, deleteUser);
routeUser.get("/users", validateToken, authAdmin, getAllUsers);
routeUser.get("/users/:id", validateToken, getUserById);
routeUser.put("/users/:id", validateToken, updateUser);
