// dependencias
const express = require("express");
const app = express();
const http = require('http')
const cors = require('cors');
const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000"
  }
});

const { config } = require("dotenv");
config();

let users = []

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} usuário conectado.`)  
    socket.on("message", data => {
      socketIO.emit("messageResponse", data)
    })

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on("newUser", data => {
      users.push(data) // Aqui temos que colocar a adição no DB
      socketIO.emit("newUserResponse", users)
    })
 
    socket.on('disconnect', () => {
      console.log('🔥: Um Usiário desconectado.');
      users = users.filter(user => user.socketID !== socket.id) // Aqui temos que 
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});


// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.routes(app);
    this.middlewares(app);
    this.database();
    this.initializeServer(app);
  }
  // middlewares
  async middlewares(app) { 
    app.use(cors());
    app.use(express.json());
  }

  
  // connect database
  async database() {
    const connection = require("./database/connection");
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Não foi possível conectar com o banco de dados:", error.message);
    }
  }
  // routes
  async routes(app) {
    const appRoutes = require("./routes");
    app.use(appRoutes);
  }

  // start server
  async initializeServer(app) {
    const PORT = process.env.PORT_NODE || 4000;
    const HOST = process.env.HOST_NODE || "localhost";

    const server = http.Server(app)
    server.listen(PORT, () => console.log(`Servidor executando http://${HOST}:${PORT}`));
  }

}

module.exports = { Server };

