import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please provide a valid email address"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  email: z.email("Please provide a valid email address"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
