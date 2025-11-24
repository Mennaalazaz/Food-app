// Handles profile, orders for customers.
const User = require('../models/User');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Food = require('../models/Food');

const getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
  res.json(user);
};

const updateProfile = async (req, res) => {
  const { username, phone, password } = req.body;
  const user = await User.findByPk(req.user.id);

  if (username) user.username = username;
  if (phone) user.phone = phone;
  if (password) user.password = await bcrypt.hash(password, 10);

  await user.save();
  res.json(user);
};

const getOrderHistory = async (req, res) => {
  const orders = await Order.findAll({
    where: { userId: req.user.id },
    include: [
      { model: OrderItem, include: [Food] },
    ],
    order: [['createdAt', 'DESC']]
  });
  res.json(orders);
};

module.exports = { getProfile, updateProfile, getOrderHistory };
