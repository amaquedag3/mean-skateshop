const modelProducto = require('../models/producto');
const productoCtrl = {};

productoCtrl.getAllProductos = async (req, res) => {
    const productos = await modelProducto.find();
    res.json(productos);
}

productoCtrl.crearProducto = async (req, res) =>{
    const newProducto = new modelProducto(req.body);
    await newProducto.save();
    res.json ({'status': 'PRODUCTO ALMACENADO CON EXITO' });
}

productoCtrl.getProducto  = async (req, res) =>{
    const unProducto = await modelProducto.findById(req.params.id);
    res.json(unProducto);
}

productoCtrl.editarProducto  = async (req, res) =>{
    const { id } = req.params;
    const productoEditar = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        marca: req.body.marca,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    };
    await modelProducto.findByIdAndUpdate(id, {$set: productoEditar}, {new: true});
    res.json ({'status': 'PRODUCTO EDITADO CON EXITO' });
}

productoCtrl.eliminarProducto  = async (req, res) =>{
    await modelProducto.findByIdAndRemove(req.params.id);
    res.json ({'status': 'PRODUCTO ELIMINADO CON EXITO' });
}

module.exports = productoCtrl;