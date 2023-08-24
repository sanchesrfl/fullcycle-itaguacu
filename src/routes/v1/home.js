const homeRoutes = require("express").Router();

const { chat } = require("../../controllers/home.js");

homeRoutes.get("/", chat );


module.exports = homeRoutes;