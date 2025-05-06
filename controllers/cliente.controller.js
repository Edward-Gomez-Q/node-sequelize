const {Cliente} =require('../models');

exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};

exports.crearCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
};
