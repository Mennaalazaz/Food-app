const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');

const Payment = sequelize.define('Payment', {
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  paymentMethod: { type: DataTypes.ENUM('Cash','Card','Online'), defaultValue: 'Cash' },
  status: { type: DataTypes.ENUM('Pending','Completed','Failed'), defaultValue: 'Pending' }
}, {
  timestamps: true
});

Payment.belongsTo(Order, { foreignKey: 'orderId', onDelete: 'CASCADE' });
Order.hasOne(Payment, { foreignKey: 'orderId' });

module.exports = Payment;
