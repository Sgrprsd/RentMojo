const express = require("express");
const rootDir = require("./utils/pathUtils");
const path = require("path");
const homeRouter = require("./routes/home");
const addHomeRouter = require("./routes/addHome");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(homeRouter);
app.use("/form", addHomeRouter);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
