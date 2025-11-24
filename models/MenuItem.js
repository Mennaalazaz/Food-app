const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Restaurant = require('./Restaurant');
const Category = require('./Category');

const MenuItem = sequelize.define('MenuItem', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  imageUrl: DataTypes.STRING
}, {
  timestamps: true
});

MenuItem.belongsTo(Restaurant, { foreignKey: 'restaurantId', onDelete: 'CASCADE' });
Restaurant.hasMany(MenuItem, { foreignKey: 'restaurantId' });

MenuItem.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'SET NULL' });
Category.hasMany(MenuItem, { foreignKey: 'categoryId' });

module.exports = MenuItem;
