import type { Request, Response, NextFunction } from "express";
import { ForbiddenError, UnauthorizedError } from "../error/appError.ts";

export const authorize = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new UnauthorizedError("Authentication required");
    }

    if (!allowedRoles.includes(req.user.role)) {
      throw new ForbiddenError(
        "You do not have permission to perform this action",
      );
    }

    next();
  };
};
