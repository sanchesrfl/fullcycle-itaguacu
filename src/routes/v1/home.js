const homeRoutes = require("express").Router();
const { index } = require("../../controllers/home.js");

homeRoutes.get("/", index );

module.exports = homeRoutes;