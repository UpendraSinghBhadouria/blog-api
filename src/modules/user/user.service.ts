import { posts, users } from "../../config/database.ts";
import { BadRequestError, NotFoundError } from "../../error/appError.ts";

export const getProfile = async (id: string) => {
  const user = users.find((user) => user._id === id);

  if (!user) {
    throw new NotFoundError("User not exists for this email");
  }

  const { password, ...userWithoutPassword } = user;
  return { user: userWithoutPassword };
};

export const getAllUsers = async () => {
  return users;
};

export const getUserById = async (id: string | undefined) => {
  if (!id) {
    throw new BadRequestError("Id parameter is missing in the route");
  }

  const user = users.find((user) => user._id === id);

  if (!user) {
    throw new NotFoundError("User not exists for this id");
  }

  const { password, ...userWithoutPassword } = user;
  return { user: userWithoutPassword };
};

export const getUserPosts = async (id: string | undefined) => {
  if (!id) {
    throw new BadRequestError("Id parameter is missing in the route");
  }

  const userPosts = posts.filter((post) => post.authorId === id);

  if (!userPosts) {
    throw new NotFoundError("User not exists for this id");
  }

  return userPosts;
};
