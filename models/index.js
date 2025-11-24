// This file imports all models (NO circular imports)
const sequelize = require("../config/db");

const User = require("./User");
const Restaurant = require("./Restaurant");
const Category = require("./Category");
const MenuItem = require("./MenuItem");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Rating = require("./Rating");
const Payment = require("./Payment");

// exporting all models and sequelize instance
module.exports = {
  sequelize,
  User,
  Restaurant,
  Category,
  MenuItem,
  Order,
  OrderItem,
  Rating,
  Payment
};
