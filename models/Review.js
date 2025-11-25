const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Food = require('./Food');

const Review = sequelize.define('Review', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 }
  },
  comment: DataTypes.TEXT
});

// Associations
Review.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });

Review.belongsTo(Food, { foreignKey: 'foodId' });
Food.hasMany(Review, { foreignKey: 'foodId' });

module.exports = Review;
