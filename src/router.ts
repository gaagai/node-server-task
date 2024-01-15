import { Application, Request, Response } from "express";
import { CategoryController } from "./controllers/categoryController";

export function setRoutes(app: Application) {
  const categoryController = new CategoryController();

  app.get("/", (req, res) => res.send("Hello, Backend Developer!"));
  app.get("/categories", categoryController.getCategories);
}
