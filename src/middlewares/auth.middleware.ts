import type { NextFunction, Request, Response } from "express";
import {
  BadRequestError,
  ServiceUnavailableError,
  UnauthorizedError,
} from "../error/appError.ts";
import { getUserFromAccessToken } from "../utils/jwts.ts";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        role: string;
      };
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    throw new UnauthorizedError("Auth header is missing");
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new UnauthorizedError("Authorization token is required");
  }

  const { id, role } = getUserFromAccessToken(token);

  req.user = { id, role };
  next();
};
