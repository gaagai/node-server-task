import App from "./app";

console.log(process.env.PORT);
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const app = new App();

app.listen(port);
