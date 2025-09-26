const express = require("express");
const rootDir = require("./utils/pathUtils");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
