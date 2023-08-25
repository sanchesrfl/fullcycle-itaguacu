const { createOneUser, loginUser } = require('../controllers/users.controller')
const { Router } = require('express')

class UserRouter{
    routesFromUser () {
        const userRoutes  = Router()
        userRoutes.post('/usuarios', createOneUser)
        userRoutes.post('/usuarios/login', loginUser)
        return userRoutes
    }
}

module.exports = new UserRouter()