// dependencias
const express = require("express");
const cors = require("cors");
const path = require("path");

// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.middlewares(app);
    this.routes(app);
    // this.database();
    this.initializeServer(app);
  }
  // middlewares
  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

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
    const http = require('http').Server(app);
    const io = require('socket.io')(http);
    const port = process.env.PORT || 3000;


    io.on('connection', (socket) => {
      socket.on('chat message', msg => {
        io.emit('chat message', msg);
      });
    });


    http.listen(port, () => {
      console.log(`Socket.IO server running at http://localhost:${port}/`);
    });

  }
}

module.exports = { Server };

