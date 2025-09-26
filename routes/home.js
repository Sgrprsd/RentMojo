const express = require("express");
const homeRouter = express.Router();

const { getAllHomes } = require("../controllers/home");

homeRouter.get("/", getAllHomes);

module.exports = homeRouter;
