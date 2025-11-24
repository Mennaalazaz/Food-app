// Handles orders, checkout, and status updates.
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Food = require('../models/Food');

const createOrder = async (req, res) => {
  const { items, restaurantId } = req.body; // items = [{foodId, quantity}]
  if (!items || items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

  let totalPrice = 0;
  for (const item of items) {
    const food = await Food.findByPk(item.foodId);
    totalPrice += parseFloat(food.price) * item.quantity;
  }

  const order = await Order.create({ userId: req.user.id, restaurantId, totalPrice });

  for (const item of items) {
    const food = await Food.findByPk(item.foodId);
    await OrderItem.create({
      orderId: order.id,
      foodId: food.id,
      quantity: item.quantity,
      price: food.price
    });
  }

  res.status(201).json(order);
};

const getOrderById = async (req, res) => {
  const order = await Order.findByPk(req.params.id, {
    include: [OrderItem]
  });
  res.json(order);
};

const updateOrderStatus = async (req, res) => {
  const { status } = req.body; // 'Preparing', 'On the way', 'Delivered'
  const order = await Order.findByPk(req.params.id);
  order.status = status;
  await order.save();
  res.json(order);
};

const getUserOrders = async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.user.id }, include: [OrderItem] });
  res.json(orders);
};

const getRestaurantOrders = async (req, res) => {
  const orders = await Order.findAll({ where: { restaurantId: req.params.id }, include: [OrderItem] });
  res.json(orders);
};

module.exports = { createOrder, getOrderById, updateOrderStatus, getUserOrders, getRestaurantOrders };
