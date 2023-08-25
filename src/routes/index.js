const router = require('express').Router();
const socketIoRoutes = require('./v1/socketIo');

router.use([socketIoRoutes])

module.exports = router