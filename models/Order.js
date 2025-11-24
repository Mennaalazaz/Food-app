const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Restaurant = require('./Restaurant');

const Order = sequelize.define('Order', {
  totalPrice: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Preparing', 'On the way', 'Delivered'),
    defaultValue: 'Preparing'
  }
});

// Associations
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

Order.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
Restaurant.hasMany(Order, { foreignKey: 'restaurantId' });

module.exports = Order;
