const express = require('express');
const Mascota = require('../models/mascotas');

const router = express.Router();

// Crear una nueva mascota (POST)
router.post('/mascotas', (req, res) => {
  const nuevaMascota = new Mascota(req.body);
  nuevaMascota
    .save()
    .then((data) => res.json(data)) // Devuelve la nueva mascota creada
    .catch((error) => res.json({ mensaje: error }));
});

// Obtener todas las mascotas (GET)
router.get('/mascotas', (req, res) => {
  Mascota.find()
    .then((data) => res.json(data)) // Devuelve un array con todas las mascotas
    .catch((error) => res.json({ mensaje: error }));
});

// Obtener una mascota por ID (GET)
router.get('/mascotas/:id', (req, res) => {
  const { id } = req.params;

  Mascota.findById(id)
        .then((data) => res.json(data)) // Devuelve un array con todas las mascotas
        .catch((error) => res.json({ mensaje: error }));
});
//Actualizar una mascota
router.put("/mascotas/:id",(req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    Mascota
        .updateOne({_id: id}, {$set: {nombre,descripcion}})
        .then((data) => res.json(data)) 
        .catch((error) => res.json({ mensaje: error }))
})

//Borrar una mascota
router.delete("/mascotas/:id", (req, res) => {
    const { id } = req.params;
    Mascota
        .findByIdAndDelete({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ mscota: error }));
})

module.exports = router;