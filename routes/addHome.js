const express = require("express");
const addHomeRouter = express.Router();

addHomeRouter.get("/add-home", (req, res, next) => {
  res.render("addHomeForm");
});

addHomeRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.render("homeAdded");
});

module.exports = addHomeRouter;
