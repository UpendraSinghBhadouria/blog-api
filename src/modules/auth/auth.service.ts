import { users } from "../../config/database.ts";
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from "../../error/appError.ts";
import {
  generateAccessToken,
  generateRefreshToken,
  getUserFromRefreshToken,
} from "../../utils/jwts.ts";
import type { LoginDto, RegisterDto } from "./auth.dto.ts";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";

export const login = async ({ email, password }: LoginDto) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new NotFoundError("User not found for this email");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new BadRequestError("Password is incorrect");
  }

  const refreshToken = generateRefreshToken({ id: user._id, role: user.role });
  const accessToken = generateAccessToken({ id: user._id, role: user.role });

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, refreshToken, accessToken };
};

export const register = async ({ name, email, password }: RegisterDto) => {
  const isUserExists = users.find((user) => user.email === email);

  if (isUserExists) {
    throw new ConflictError(
      "User already exists for this email, please try with another email",
    );
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    _id: randomUUID(),
    name,
    email,
    role: "user",
    password: hashedPassword,
  };
  users.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;

  return { user: userWithoutPassword };
};

export const refreshToken = async (token: string | undefined) => {
  if (!token) {
    throw new UnauthorizedError("Authentication token is missing");
  }

  const { id, role } = getUserFromRefreshToken(token);

  const newRefreshToken = generateRefreshToken({ id, role });
  const newAccessToken = generateAccessToken({ id, role });

  return { newRefreshToken, newAccessToken };
};

export const logout = async (token: string) => {
  if (!token) {
    throw new UnauthorizedError("Refresh Token is missing");
  }
};
