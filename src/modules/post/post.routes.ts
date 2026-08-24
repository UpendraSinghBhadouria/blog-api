import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.ts";
import { fetchAllPosts, fetchPostById } from "./post.controller.ts";

export const router = express.Router();

router
  .get("/", authMiddleware, fetchAllPosts)
  .get("/:id", authMiddleware, fetchPostById);
