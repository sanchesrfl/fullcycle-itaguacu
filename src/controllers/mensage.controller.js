const { Op } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const {checkBody } = require('../services/checkBody')
const { Mensagem, Mensagens } = require('../models/mensagem')
class MensagemController {
    async createOneMensagem(request,response){
        try {
            const { 
                created_by,
                mensagem
            } = request.body

            const keysAllowed = [
                "created_by",
                "mensagem"
            ]
            if (checkBody(keysAllowed,request.body)){
                return response.status(400).send({
                    msg: 'Algum campo enviado não é permitido.'
                })               
            } 
            const  newMessage = await Mensagem.create({created_by, mensagem})
            return response.status(200).send('Mensagem arquivada...')
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

    async listMensagemByUser(request, response){
        try {
            const { created_by } = request.query
            var data = null
            if (!created_by) {
                data = await Mensagens.findAll()
            } else {
                data = await Mensagens.findAll({ where: { created_by } })
            }
            return response.status(200).send(data)
        } catch (error) {
            return response.status(400).send(
                {
                    msg: "Erro enviado do banco de dados",
                    cause: error.message
                }
            )
        }
    }

    async deleteMensagemById(request, response){
        try {
            const { id } = request.params
            const idtest = parseInt(id)
            if ( idtest <= 0 || isNaN(idtest) ){
                return response.status(400).send({
                    msg: 'Valor do id tem que ser numérico e positivo.'
                })
            }
            const medicine = await Mensagens.findOne({ where: { id }})
            if (!medicine) return response.status(404).send({
                                                            msg: 'Mensagem não encontrado.'
                                                        })
            await Mensagens.destroy({ where: { id }})
            return response.status(204).send()
        } catch (error) {
            return response.status(400).send(
                {
                    msg: "Erro enviado do banco de dados",
                    cause: error.message
                }
            )
        }
    }    
};

module.exports =  new MensagemController()