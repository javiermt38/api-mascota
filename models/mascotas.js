const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    descripion:{
        type: String,
        required: true,
    }
});

/* Creacion del modelo */
const Mascota = mongoose.model('Mascota',mascotaSchema);
module.exports = Mascota;