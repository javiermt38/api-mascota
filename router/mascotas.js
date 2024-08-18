const express = require('express');
const Mascota = require('../models/mascotas');

const router = express.Router();

//Crear mascotas
router.post("/mascotas",(req,res)=>{
    //res.send('Creacion De Mascota')
    const mascota = Mascota(req.body);
    mascota
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({mensaje: error}));
});
module.exports = router;
