const {Router} = require('express');
const ROUTER = Router();
const jwt = require('jsonwebtoken');

//Controladores
const productoCtrl = require('../controllers/producto.controller');
const clienteCtrl = require('../controllers/cliente.controller');
const authCtrl = require('../controllers/auth.controller');


ROUTER.post('/login', authCtrl.login);
ROUTER.post('/register', authCtrl.register);

ROUTER.get('/clientes', clienteCtrl.getAllClientes);
//ROUTER.post('/',clienteCtrl.crearCliente);
//ROUTER.get('/:id', clienteCtrl.getCliente);
ROUTER.put('/clientes/:id', verifyToken, clienteCtrl.editarCliente); 
ROUTER.delete('/clientes/:id', verifyToken, clienteCtrl.eliminarCliente);

ROUTER.get('/productos/', productoCtrl.getAllProductos);
ROUTER.post('/productos/:prod', verifyToken, productoCtrl.crearProducto);
//ROUTER.get('/:id', productoCtrl.getProducto);
ROUTER.put('/productos/:prod', verifyToken, productoCtrl.editarProducto);
ROUTER.delete('/productos/:id', verifyToken, productoCtrl.eliminarProducto);


function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send("No autorizado");
    }
    const token = req.headers.authorization.split('')[1];
 
    if (token === null){
        return res.status(401).send("No autorizado");
    }
 
    const payload = jwt.verifyToken(token, 'secretkey');
    req.clienteId = payload._id;
    next();
 }
 
 module.exports = ROUTER;