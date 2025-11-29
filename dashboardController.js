const Order = require("../models/Order");

//Open Orders
const getRestaurantOrders = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;

    // نتأكد المطعم صاحب الطلبات هو نفسه اللي عامل الدخول
    if (restaurantId !== req.restaurant._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const orders = await Order.find({ restaurant: restaurantId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// change status prepare-on way-delivered
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const allowedStatuses = ["Preparing", "On the way", "Delivered"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    // نتأكد الطلب تابع للمطعم
    if (order.restaurant.toString() !== req.restaurant._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    order.status = status;
    await order.save();
    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Statistics- no.orders ,,
const getRestaurantStats = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    if (restaurantId !== req.restaurant._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const orders = await Order.find({ restaurant: restaurantId });

    const totalOrders = orders.length;
    const ordersByStatus = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    res.json({
      totalOrders,
      ordersByStatus,
      totalSales,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRestaurantOrders,
  updateOrderStatus,
  getRestaurantStats,
};
