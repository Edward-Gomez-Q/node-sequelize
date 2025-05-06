const { Pedido } = require('../models');

exports.obtenerPedidos = async (req, res) => {
 const pedidos = await Pedido.findAll();
 res.json(pedidos);
};
exports.crearPedido = async (req, res) => {
 const pedido = await Pedido.create(req.body);
 res.status(201).json(pedido);
};