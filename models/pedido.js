'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        as: 'cliente',
        targetKey: 'id'
      });
    }
  }
  Pedido.init({
    fecha: DataTypes.DATE,
    total: DataTypes.FLOAT,
    clienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clientes',
        key: 'id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};