import App from "./app";
import "dotenv/config";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const app = new App();

app.listen(port);
