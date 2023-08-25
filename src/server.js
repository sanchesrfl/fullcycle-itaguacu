// dependencias
const express = require("express");
const app = express();
const cors = require("cors");

// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.routes(app);
    this.middlewares(app);
    // this.database();
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

    const server = require('http').createServer(app);
    const io = require("socket.io")(server, {
      path: "/chat"
    });

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });

    io.on("connection", (socket) => {
      console.log("socket conectado: ", socket.id);
      socket.on("chat message", (msg) => {
        console.log("Mensagem recevido : ", msg);
        io.emit("chat message", msg);
      });
    }
    );
  }
}

module.exports = { Server };

