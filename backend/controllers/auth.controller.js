
const modelCliente = require('../models/cliente');
const authCtrl = {};

authCtrl.register = async (req, res) => { 
    const {email, username, pass} = req.body;
    const newClient = new modelCliente({email, username, pass}, 1);
    await newClient.save();
    const token = jwt.sign({_id: newClient._id}, 'secretkey')
    return res.status(200).json({token});  
}

authCtrl.login = async (req, res) => { 
    const {email, pass} = req.body;
    const cliente = await modelCliente.findOne({email, pass});
    if(!cliente) return res.status(401).send("El email no existe");
    if(cliente.pass !== pass) return res.status(401).send("Contraseña incorrecta");
    const token = jwt.sign({_id: clientes._id}, 'secretkey');
    return res.status(200).json({token});
}

authCtrl.private = async (req, res ) => {
    return res.json("private")
}

module.exports = authCtrl;