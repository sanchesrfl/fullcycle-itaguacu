module.exports = {

    async chatSocketPost(req, res) {

        const { mensagem, usuario } = req.headers

        const clienteSocket = require("socket.io-client");

        const socket = clienteSocket.connect("http://localhost:3000");

        socket.emit("chat message", `${usuario} : ${mensagem}`);

        return res.send({ message: " mensagem novo", mensagem, usuario })

    }
};