const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Restaurant = sequelize.define('Restaurant', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  logoURL: DataTypes.STRING,
  foods : DataTypes.JSON,
  delivery: { type: DataTypes.BOOLEAN, defaultValue: false },
  pickup : { type: DataTypes.BOOLEAN, defaultValue: false },
  isOpen: { type: DataTypes.BOOLEAN, defaultValue: true },
  rating : { type: DataTypes.FLOAT, defaultValue: 0.0 },
}, {
  timestamps: true
});

module.exports = Restaurant;
