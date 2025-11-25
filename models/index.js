// this to load all models and associations

const sequelize = require('../config/db');

const User = require('./User');
const Restaurant = require('./Restaurant');
const Category = require('./Category');
const Food = require('./Food');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const Review = require('./Review');

// Synchronize all models
sequelize.sync({force: true }) // alter:true updates DB without dropping
  .then(() => console.log('Database synced successfully!'))
  .catch(err => console.error('Database sync error:', err));

module.exports = {
  sequelize,
  User,
  Restaurant,
  Category,
  Food,
  Order,
  OrderItem,
  Review
};
