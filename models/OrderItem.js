const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');
const MenuItem = require('./MenuItem');

const OrderItem = sequelize.define('OrderItem', {
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
  timestamps: false
});

OrderItem.belongsTo(Order, { foreignKey: 'orderId', onDelete: 'CASCADE' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });

OrderItem.belongsTo(MenuItem, { foreignKey: 'itemId' });
MenuItem.hasMany(OrderItem, { foreignKey: 'itemId' });

module.exports = OrderItem;
