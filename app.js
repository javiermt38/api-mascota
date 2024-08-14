const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Asegúrate de que esta línea esté al inicio

const app = express();

const port = process.env.PORT || 9000; // Utiliza el puerto definido en .env o el valor por defecto 9000

app.get('/', (req, res) => {
  res.send("Bienvenido a nuestra API con Node");
});

// Conexión a MongoDB con manejo de errores
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

app.listen(port, () => {
  console.log(`API con Node y Express, escuchando en el puerto: ${port}`);
});
