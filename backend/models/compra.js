const mongoose = require('mongoose');
const { Schema } = mongoose;

const compraSchema = new Schema({
    importe: { type: Number,  required: true},
    idProductos: {type: Array, required: true},
    cantidades: {type: Array, required: true},
    precioUnit: {type: Array, required: true},
    idCliente: { type: Number, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Compra', compraSchema);