import express from "express";
import type { Request, Response } from "express";
import { config } from "dotenv";
import { loggerMiddleware } from "./middlewares/logger.middleware.ts";
import { errorMiddleware } from "./middlewares/error.middleware.ts";
import { AuthRoutes } from "./modules/auth/auth.module.ts";
import cookieParser from "cookie-parser";

const app = express();
config();

app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware);

app.get("/health-check", (_: Request, res: Response) => {
  res.status(200).json({ message: "Server is running successfully" });
});
app.use("/api/auth", AuthRoutes);

app.use(errorMiddleware); // at last after all the routes
const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () =>
  console.log(`Server is runnnig at http://localhost:${PORT}`),
);
