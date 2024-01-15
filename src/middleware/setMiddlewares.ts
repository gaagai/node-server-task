import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import morganMiddleware from "./morganMiddleware";

export function setMiddlewares(app: Application): void {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(morganMiddleware);
}
