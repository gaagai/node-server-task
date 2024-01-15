import { Application } from "express";

export function setRoutes(app: Application) {
  app.get("/", (req, res) => res.send("Hello, Backend Developer!"));
}
