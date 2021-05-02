const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    email: {type: String},
    username: {type: String},
    pass: {type: String},
    tipo: {type: Number}
},{
    timestamps: true
});

module.exports = mongoose.model('Cliente', clienteSchema);