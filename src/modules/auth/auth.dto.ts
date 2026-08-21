import { z } from "zod";
import type { loginSchema, registerSchema } from "./auth.validation.ts";

export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
