import { Application, Request, Response } from "express";

const categories = [
  { id: 1, name: "Cleaning Products" },
  { id: 2, name: "Cheeses" },
  // ... other categories
];

export function setRoutes(app: Application) {
  app.get("/", (req, res) => res.send("Hello, Backend Developer!"));
  app.get("/categories", (req: Request, res: Response) => {
    res.json(categories);
  });
}
