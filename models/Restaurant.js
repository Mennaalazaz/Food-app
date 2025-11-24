const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  logoURL: DataTypes.STRING
}, {
  timestamps: true
});

module.exports = Restaurant;
