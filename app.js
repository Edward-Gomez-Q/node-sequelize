const express = require('express');
const app = express();

const clienteRoutes = require('./routes/cliente.routes');
const pedidoRoutes = require('./routes/pedido.routes');

app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/api', pedidoRoutes);

module.exports = app;