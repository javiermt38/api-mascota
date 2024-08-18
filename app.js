const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure correct spelling

const app = express();

// variable de ambient para el hosting
const port = process.env.PORT || 9000;

//ruta de API
const mascotaRouter=require("./router/mascotas");

//middleware api
app.use(express.json());    
app.use("/api",mascotaRouter);

app.get('/', (req, res) => {
  res.send("Bienvenido a nuestra API con Node");
});

// Mongoose Connection with potential error checking:
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

app.listen(port, () => {
  console.log(`API con Node y Express, Escuchando en el puerto: ${port}`);
});
