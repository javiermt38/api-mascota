const express = require('express');
const router = express.Router();

//Crear mascotas
router.post("/mascotas",(req,res)=>{
    res.send('Creacion De Mascota')
})
module.exports = router;
