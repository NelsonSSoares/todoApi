const express = require("express");
const router = require("router/routers.js")
const app = express();
const { APP_PORT, APP_NAME } = require("./utils/appConfig");

app.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ToDo APP API");
});


app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});
