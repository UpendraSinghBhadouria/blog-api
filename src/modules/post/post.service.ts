import { posts, users } from "../../config/database.ts";
import { BadRequestError, NotFoundError } from "../../error/appError.ts";

export const getAllPosts = async () => {
  return posts;
};

export const getPostById = async (id: string | undefined) => {
  if (!id) {
    throw new BadRequestError("Id parameter is missing in the route");
  }

  const post = posts.find((post) => post._id === id);

  if (!post) {
    throw new NotFoundError("Post not found for this id");
  }

  return post;
};
