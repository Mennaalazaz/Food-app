const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Restaurant = require('./Restaurant');
const Category = require('./Category');

const Food = sequelize.define('Food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  imageURL: DataTypes.STRING
});

// Associations
Food.belongsTo(Restaurant, { foreignKey: 'restaurantId', onDelete: 'CASCADE' });
Restaurant.hasMany(Food, { foreignKey: 'restaurantId' });

Food.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Food, { foreignKey: 'categoryId' });

module.exports = Food;
