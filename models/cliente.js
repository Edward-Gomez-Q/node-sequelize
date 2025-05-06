'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Pedido, {
        foreignKey: 'clienteId',
        as: 'pedidos',
        onDelete: 'CASCADE'
      });
    }
  }
  Cliente.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};