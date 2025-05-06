const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');

router.post('/clientes', crearCliente);
router.get('/clientes', obtenerClientes);
router.get('/clientes/:id', obtenerClientePorId); 
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente);

module.exports = router;