import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

export const routeUser = Router();

routeUser.delete("/users/:id", deleteUser);
routeUser.get("/users", getAllUsers);
routeUser.get("/users/:id", getUserById);
routeUser.put("/users/:id", updateUser);
