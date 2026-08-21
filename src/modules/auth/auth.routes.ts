import express from "express";
import { login, logout, me, refresh, register } from "./auth.controller.ts";
import { validate } from "../../middlewares/validate.middleware.ts";
import { loginSchema, registerSchema } from "./auth.validation.ts";
import { authMiddleware } from "../../middlewares/auth.middleware.ts";

export const router = express.Router();

router
  .post("/login", validate(loginSchema), login)
  .post("/register", validate(registerSchema), register)
  .get("/refresh", refresh)
  .get("/logout", authMiddleware, logout)
  .get("/me", authMiddleware, me);
