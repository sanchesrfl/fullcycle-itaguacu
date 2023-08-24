const router = require('express').Router();
const homeRoutes = require('./v1/home');

router.use([homeRoutes])

module.exports = router