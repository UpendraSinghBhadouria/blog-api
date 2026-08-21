import jwt from "jsonwebtoken";
import {
  ServiceUnavailableError,
  UnauthorizedError,
} from "../error/appError.ts";

export const generateRefreshToken = (payload: Record<string, string>) => {
  const token = jwt.sign(payload, process.env.REFRESH_TOKEN_SERCRET as string, {
    expiresIn: "1h",
  });

  return token;
};

export const generateAccessToken = (payload: Record<string, string>) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SERCRET as string, {
    expiresIn: "2m",
  });

  return token;
};

export const getUserFromRefreshToken = (token: string) => {
  const { id, role } = jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SERCRET!,
  ) as {
    id: string;
    role: string;
  };

  return { id, role };
};

export const getUserFromAccessToken = (token: string) => {
  try {
    const { id, role } = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SERCRET!,
    ) as {
      id: string;
      role: string;
    };

    return { id, role };
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedError("Invalid token");
    }

    if (error instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError("Authentication token is expired");
    }

    throw new ServiceUnavailableError();
  }
};
