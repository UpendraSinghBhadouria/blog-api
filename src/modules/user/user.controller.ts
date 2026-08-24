import type { Request, Response, NextFunction } from "express";
import * as userService from "./user.service.ts";

export const fetchMe = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user.id;
    const { user } = await userService.getProfile(userId);

    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Uers fetched successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { user } = await userService.getUserById(id as string | undefined);

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchUserPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const posts = await userService.getUserPosts(id as string | undefined);

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    next(error);
  }
};
