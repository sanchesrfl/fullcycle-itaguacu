const homeRoutes = require("express").Router();

const { chatSocket } = require("../../controllers/chatsocket");

homeRoutes.get("/chat", chatSocket );


module.exports = homeRoutes;