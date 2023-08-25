const { Router } = require('express')
const { routesFromUser } = require('./v1/user.routers')
const { routesFromMessage } = require('./v1/message.router')
const routes = new Router()


routes.use('/api', [
  routesFromUser(),
  routesFromMessage()
])

// Exportação do objeto routes para uso no server.js
module.exports = routes