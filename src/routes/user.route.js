import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { authAdmin } from "../middlewares/adminMiddleware.js";

export const routeUser = Router();

routeUser.delete("/users/:id", validateToken, authAdmin, deleteUser);
routeUser.get("/users", validateToken, authAdmin, getAllUsers);
routeUser.get("/users/:id", validateToken, authAdmin, getUserById);
routeUser.put("/users/:id", validateToken, authAdmin, updateUser);
