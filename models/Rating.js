const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  

const User = require('./User');
const MenuItem = require('./MenuItem');

const Rating = sequelize.define('Rating', {
  rating: { type: DataTypes.INTEGER, allowNull: false },
  review: DataTypes.TEXT
}, {
  timestamps: true
});

Rating.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Rating, { foreignKey: 'userId' });

Rating.belongsTo(MenuItem, { foreignKey: 'itemId' });
MenuItem.hasMany(Rating, { foreignKey: 'itemId' });

module.exports = Rating;
