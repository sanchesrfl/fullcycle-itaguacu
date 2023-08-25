const socketIoRoutes = require("express").Router();

const { chatSocketPost } = require("../../controllers/socketIo.controller");

socketIoRoutes.post("/", chatSocketPost );


module.exports = socketIoRoutes;