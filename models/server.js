const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.usersPath = "/api/users";

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    // use cors
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //directorio public
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor esta escuchando por el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
