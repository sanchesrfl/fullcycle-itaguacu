// dependencias
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {config} = require("dotenv");
config();

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
    app.use(morgan("dev"))
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
    const PORT = process.env.PORT_NODE || 3000;
    const HOST = process.env.HOST_NODE || "localhost";
    app.listen(PORT, () => console.log(`Servidor executando http://${HOST}:${PORT}`));
  }

}

module.exports = { Server };

