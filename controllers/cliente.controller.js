const {Cliente} =require('../models');
// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
    try {
        const { nombre, correo } = req.body;
        if (!nombre || !correo) {
            return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
        }
        const nuevoCliente = await Cliente.create({ nombre, correo });
        res.status(201).json(nuevoCliente);

    }
    catch (error) {
        console.error('Error al crear cliente:', error);
        return res.status(500).json({ error: 'Error al crear cliente' });
    }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    }
    catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
};
// Obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(cliente);
    }
    catch (error) {
        console.error('Error al obtener cliente:', error);
        res.status(500).json({ error: 'Error al obtener cliente' });
    }
};
// Actualiza un cliente
exports.actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        cliente.nombre = nombre || cliente.nombre;
        cliente.correo = correo || cliente.correo;
        await cliente.save();
        res.json(cliente);
    }
    catch (error) {
        console.error('Error al actualizar cliente:', error);
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
};
// Elimina un cliente
exports.eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.json({ message: 'Cliente eliminado' });
    }
    catch (error) {
        console.error('Error al eliminar cliente:', error);
        res.status(500).json({ error: 'Error al eliminar cliente' });
    }
};