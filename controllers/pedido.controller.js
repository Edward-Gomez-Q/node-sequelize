const { Pedido } = require('../models');

const { Cliente } = require('../models');

//Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
    try{
        const { fecha, total, clienteId } = req.body;
        if (!fecha || !total || !clienteId) {
            return res.status(400).json({ error: 'Fecha, total y clienteId son obligatorios' });
        }
        const fechaValida = new Date(fecha);
        if (isNaN(fechaValida.getTime())) {
            return res.status(400).json({ error: 'Fecha no válida' });
        }
        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        const nuevoPedido = await Pedido.create({ fecha, total, clienteId });
        res.status(201).json(nuevoPedido);

    } catch (error) {
        console.error('Error al crear pedido:', error);
        return res.status(500).json({ error: 'Error al crear pedido' });
    }
};
//Obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        console.error('Error al obtener pedidos:', error);
        res.status(500).json({ error: 'Error al obtener pedidos' });
    }
};
//Obtener un pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        console.error('Error al obtener pedido:', error);
        res.status(500).json({ error: 'Error al obtener pedido' });
    }
};
//Actualiza un pedido
exports.actualizarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, total, clienteId } = req.body;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        pedido.fecha = fecha || pedido.fecha;
        pedido.total = total || pedido.total;
        pedido.clienteId = clienteId || pedido.clienteId;
        await pedido.save();
        res.json(pedido);
    } catch (error) {
        console.error('Error al actualizar pedido:', error);
        res.status(500).json({ error: 'Error al actualizar pedido' });
    }
};
//Eliminar un pedido
exports.eliminarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        await pedido.destroy();
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        console.error('Error al eliminar pedido:', error);
        res.status(500).json({ error: 'Error al eliminar pedido' });
    }
};