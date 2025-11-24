// Handles menu management for admin and browsing for users.
const Food = require('../models/Food');
const Category = require('../models/Category');
const Restaurant = require('../models/Restaurant');

const getAllFoods = async (req, res) => {
  const foods = await Food.findAll({ include: [Category, Restaurant] });
  res.json(foods);
};

const getFoodById = async (req, res) => {
  const food = await Food.findByPk(req.params.id, { include: [Category, Restaurant] });
  res.json(food);
};

const createFood = async (req, res) => {
  const { name, description, price, imageURL, categoryId, restaurantId } = req.body;
  const food = await Food.create({ name, description, price, imageURL, categoryId, restaurantId });
  res.status(201).json(food);
};

const updateFood = async (req, res) => {
  const food = await Food.findByPk(req.params.id);
  Object.assign(food, req.body);
  await food.save();
  res.json(food);
};

const deleteFood = async (req, res) => {
  await Food.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Food deleted' });
};

module.exports = { getAllFoods, getFoodById, createFood, updateFood, deleteFood };
