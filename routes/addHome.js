const express = require("express");
const { addHome, homeDetails } = require("../controllers/home");
const addHomeRouter = express.Router();

addHomeRouter.get("/add-home", addHome);

addHomeRouter.post("/add-home", homeDetails);

module.exports = addHomeRouter;
