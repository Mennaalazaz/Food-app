const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Restaurant = require('./Restaurant');

const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  timestamps: false
});

Category.belongsTo(Restaurant, { foreignKey: 'restaurantId', onDelete: 'CASCADE' });
Restaurant.hasMany(Category, { foreignKey: 'restaurantId' });

module.exports = Category;
