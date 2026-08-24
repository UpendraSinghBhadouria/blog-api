import type { Request, Response, NextFunction } from "express";
import * as postService from "./post.service.ts";

export const fetchAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchPostById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const posts = await postService.getPostById(id as string | undefined);

    res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      posts,
    });
  } catch (error) {
    next(error);
  }
};
