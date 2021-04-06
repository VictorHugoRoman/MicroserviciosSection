//Aplicacion Monolitica
const express = require("express");
const app = express();

//Objeto q nuestros endpoints devolverán
const response = {
  data: [], //datos q estaran n la memoria
  services: "Monolithic Service",
  architecture: "Monolithic" //para diferenciar la arquitectura
};

//Middleware para limpiar los datos (response.data)
app.use((req, res, next) => {
  response.data = []; //limpiamos los datos
  next(); //para q l flujo continue
});


/*Construyendo los endpoints*/

//endpoint get usuarios
app.get("/api/v1/users", (req, res) => {
  response.data.push("Marluan", "Jeffrey", "Alexis");
  return res.send(response);
});
//endpoint get libros
app.get("/api/v1/books", (req, res) => {
  response.data.push(
    "The clean coder",
    "The pragmatic programmer",
    "Soft skills"
  );
  return res.send(response);
});
//endpoint get autos
app.get("/api/v1/cars", (req, res) => {
  response.data.push("Fearrari", "Fiat", "BMW");
  return res.send(response);
});

//exportamos el server(app) para q pueda ser consumido desde nuestro index
module.exports = app;
