const express = require('express');
const router = express.Router();
const { obtenerPedidos, crearPedido } = require('../controllers/pedido.controller');

router.get('/pedidos', obtenerPedidos);
router.post('/pedidos', crearPedido);

module.exports = router;