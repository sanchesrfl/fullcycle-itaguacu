const { createOneMessage } = require('../controllers/mensage.controller.js')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class MessageRouter{
    routesFromMessage () {
        const userMessage  = Router()
        userMessage.post('/message', createOneMessage)
        return userMessage
    }
}

module.exports = new MessageRouter()