import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { ValidationError } from "../error/appError.ts";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return next(new ValidationError("Validation failed", details));
    }

    req.body = result.data;

    next();
  };
};
