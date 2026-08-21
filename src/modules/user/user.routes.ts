import express from "express";
import {
  fetchAllUsers,
  fetchMe,
  fetchUserById,
  fetchUserPosts,
} from "./user.controller.ts";
import { authMiddleware } from "../../middlewares/auth.middleware.ts";
import { authorize } from "../../middlewares/authorization.middleware.ts";

export const router = express.Router();

router
  .get("/me", authMiddleware, fetchMe)
  .get("/", authMiddleware, authorize("admin"), fetchAllUsers)
  .get("/:id", authMiddleware, fetchUserById)
  .get("/:id/posts", authMiddleware, fetchUserPosts);
