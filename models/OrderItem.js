const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');
const Food = require('./Food');

const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
});

// Associations
OrderItem.belongsTo(Order, { foreignKey: 'orderId', onDelete: 'CASCADE' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });

OrderItem.belongsTo(Food, { foreignKey: 'foodId' });
Food.hasMany(OrderItem, { foreignKey: 'foodId' });

module.exports = OrderItem;
