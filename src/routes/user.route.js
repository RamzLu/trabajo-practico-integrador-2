import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

export const routeUser = Router();

routeUser.delete("/user/:id", deleteUser);
routeUser.get("/user", getAllUsers);
routeUser.get("/user/:id", getUserById);
routeUser.put("/user/:id", updateUser);
