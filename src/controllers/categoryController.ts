import { Request, Response } from "express";
import { db } from "../dbConnection";

export class CategoryController {
  public async getCategories(req: Request, res: Response) {
    try {
      const categories = await db.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).send("Error fetching categories");
    }
  }
}
