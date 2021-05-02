const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    urlImg: {type: String, required: true},
    nombre: {type: String, required: true},
    categoria: {type: String, required: true},
    marca: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    stock: {type: Number, required: true}
});

module.exports = mongoose.model('Producto', productoSchema);