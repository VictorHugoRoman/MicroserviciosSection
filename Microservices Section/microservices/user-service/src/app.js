const express = require("express");
const app = express();

//objet q contiene los datos para la respuesta de la peticion, el nombre del servicio y la rquitectura
const response = {
  data: [],
  services: "User Service",
  architecture: "Microservices"
};

//arrow function para imprimir en consola
const logger = message => console.log("[👤  User Service]: " + message);//funcion de flecha (arrow function)

//middleware para limpiar los datos del objeto response
app.use((req, res, next) => {
  response.data = [];
  next();
});

//Servicio get
app.get("/api/v2/users", (req, res) => {
  response.data.push("Carlos", "Pedro", "Lucas");
  logger("Get user data");
  return res.send(response);
});

module.exports = app;
