const { sign } = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { Users  } = require('../models/users')
const { checkBody } = require('../services/checkBody')

class UsersController{
    async createOneUser(request, response){

        try {
            const {
                name,
                email,
                password
            } = request.body;
            const keysAllowed = [
                "name",
                "email",
                "password"
            ]

            if (checkBody(keysAllowed,request.body)){
                return response.status(400).send({
                    msg: 'Algum campo enviado não é permitido.'
                })
            }

            const data = await Users.create({
                name,
                email,
                password
                })
                
            return response.status(201).send(data)

            
        } catch (error) {
        const statusCode = error.message.status || 400;
        const message = error.message.msg || error.message;
        
        return response.status(parseInt(statusCode)).send(
            {
                msg: "Erro enviado do banco de dados",
                cause: message
            }
        )
        }        
    }

    async loginUser(request, response) {
        const {
            email,
            password
        } = request.body;
        if (!email || !password) {
            return response.status(400).send({ msg: "Todos os campos senha e email devem ser fornecidos." });
          } else {
            console.log('Request.body com dados completo.')
          }
        try {              
                const user = await Users.findOne({
                    where:{email:email}})
                    
                if (!user) {
                    return response.status(404).send({"msg": "Usuário não encontrado."})
                }
                if (user.password === password){
                    const payload = {"email": user.email, "id":user.id}
                    const token = sign(payload, process.env.JWT_SECRET_KEY, {
                        expiresIn: "1d"
                    })         
                    return response.status(200).send({"token": token}) 
                }
                else {
                    return response.status(401).send({"msg": "Senha Invalida"})
                }
            } catch (error) {
                return response.status(400).send({
                    msg: "Erro enviado do banco de dados",
                    error: error.message
                })
            }
    }

   
}

module.exports = new UsersController()