const compra = require('../models/compra');
const modelCompra = require('../models/compra');
const compraCtrl = {};

compraCtrl.getAllCompras = async (req, res) => {
    const compras = await modelCompra.find();
    res.json(compras);
}

compraCtrl.crearCompra = async (req, res) => {
    const newCompra = new modelCompra(req.body);
    await newCompra.save;
    res.json ({'status': 'COMPRA ALMACENADO CON EXITO' });
}

productoCtrl.getCompra  = async (req, res) =>{
    const compra = await modelCompra.findById(req.params.id);
    res.json(compra);
}

productoCtrl.editarCompra  = async (req, res) =>{
    const { id } = req.params;
    const productoEditar = {
        importe: req.body.importe,
        idProductos: req.body.ids,
        cantidades: req.body.cantidades,
        precioUnit: req.body.precioU,
        idCliente: req.body.idCli
    };
    await modelCompra.findByIdAndUpdate(id, {$set: productoEditar}, {new: true});
    res.json ({'status': 'COMPRA EDITADA CON EXITO' });
}

compraCtrl.eliminarCompra  = async (req, res) =>{
    await modelCompra.findByIdAndRemove(req.params.id);
    res.json ({'status': 'COMPRA ELIMINADA CON EXITO' });
}
module.exports = compraCtrl;