import config from "./config/index";
import express from "express";
import test from "./app/routes/foo";

const app = express();
const port = config.port;

app.use(test);

app.listen(port, () => {
  return console.log(`App is running at http://localhost:${port}`);
});
