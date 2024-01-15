import express from "express";
import { logger } from "./utils/logger";
import { setMiddlewares } from "./middleware/setMiddlewares";
import { setRoutes } from "./router";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    setMiddlewares(this.express);
    setRoutes(this.express);
  }

  public listen(port: number): void {
    this.express
      .listen(port, () => {
        logger.info(`Server running on port ${port}`);
      })
      .on("error", (error) => {
        logger.error(`Error starting the server: ${error}`);
      });
  }
}

export default App;
