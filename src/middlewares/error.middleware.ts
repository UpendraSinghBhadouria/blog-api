import type { Request, Response, NextFunction } from "express";
import { AppError } from "../error/appError.ts";

export const errorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  if (err instanceof AppError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
      code: err.code,
      details: err.details,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message ?? "Something Went Wrong",
    code: "INTERNAL_ERROR",
  });
};
