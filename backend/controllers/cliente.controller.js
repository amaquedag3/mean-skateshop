const modelCliente = require('../models/cliente');
const clienteCtrl = {};

clienteCtrl.getAllClientes = async (req, res) => {
    const clientes = await modelCliente.find();
    res.json(clientes);
}

clienteCtrl.crearCliente = async (req, res) =>{
    const newCliente = new modelCliente(req.body);
    await newCliente.save();
    res.json ({'status': 'CLIENTE ALMACENADO CON EXITO' });
}

clienteCtrl.getCliente  = async (req, res) =>{
    const unCliente = await modelCliente.findById(req.params.id);
    res.json(unCliente);
}

clienteCtrl.editarCliente  = async (req, res) =>{
    const { id } = req.params;
    const clienteEditar = {
        email: req.body.email,
        username: req.body.username,
        pass: req.body.pass
    };
    await modelCliente.findByIdAndUpdate(id, {$set: clienteEditar}, {new: true});
    res.json ({'status': 'CLIENTE EDITADO CON EXITO' });
}

clienteCtrl.eliminarCliente  = async (req, res) =>{
    await modelProducto.findByIdAndRemove(req.params.id);
    res.json ({'status': 'CLIENTE ELIMINADO CON EXITO' });
}

module.exports = clienteCtrl;