// Handles admin operations for restaurants and dashboard.

const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const Food = require('../models/Food');

const getAllRestaurants = async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
};

const getRestaurantById = async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id, {
    include: [Food]
  });
  res.json(restaurant);
};


const createRestaurant = async (req, res) => {
  const { name, email, password, phone, address, logoURL } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const restaurant = await Restaurant.create({ name, email, password: hashedPassword, phone, address, logoURL });
  res.status(201).json(restaurant);
};

const updateRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
  }
  Object.assign(restaurant, req.body);
  await restaurant.save();
  res.json(restaurant);
};

const deleteRestaurant = async (req, res) => {
  await Restaurant.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Restaurant deleted' });
};

const getRestaurantbyCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const restaurants = await Restaurant.findAll({
    include: [{
      model: Food,
      where: { categoryId }
    }]
  });
  res.json(restaurants);
};


// Dashboard example: total orders and sales
const getDashboard = async (req, res) => {
  const restaurantId = req.params.id;
  const orders = await Order.findAll({ where: { restaurantId } });
  const totalSales = orders.reduce((sum, order) => sum + parseFloat(order.totalPrice), 0);
  res.json({ totalOrders: orders.length, totalSales });
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getDashboard
};
