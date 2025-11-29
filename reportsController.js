const Order = require('../models/Order');

// Best seller item
const getMostOrderedItems = (orders) => {
  const itemCounts = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
    });
  });
  const sortedItems = Object.entries(itemCounts).sort((a,b) => b[1] - a[1]);
  return sortedItems.map(([name, quantity]) => ({ name, quantity }));
};

// Daily Repoo
const dailyReport = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (restaurantId !== req.user.restaurantId) {
      return res.status(403).json({ message: "Access denied" });
    }

    const start = new Date();
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);

    const orders = await Order.find({ 
      restaurant: restaurantId, 
      createdAt: { $gte: start, $lte: end } 
    });

    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    const avgOrderValue = totalOrders ? totalSales / totalOrders : 0;
    const mostOrderedItems = getMostOrderedItems(orders);
    const uniqueUsers = new Set(orders.map(o => o.user.toString())).size;

    res.json({ totalOrders, totalSales, avgOrderValue, mostOrderedItems, uniqueUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Weekly Repoo
const weeklyReport = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    if (restaurantId !== req.user.restaurantId) {
      return res.status(403).json({ message: "Access denied" });
    }

    const start = new Date();
    start.setDate(start.getDate() - start.getDay()); // Start from Sunday
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);

    const orders = await Order.find({ 
      restaurant: restaurantId, 
      createdAt: { $gte: start, $lte: end } 
    });

    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    const avgOrderValue = totalOrders ? totalSales / totalOrders : 0;
    const mostOrderedItems = getMostOrderedItems(orders);
    const uniqueUsers = new Set(orders.map(o => o.user.toString())).size;

    res.json({ totalOrders, totalSales, avgOrderValue, mostOrderedItems, uniqueUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Monthly Repoo
const monthlyReport = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    if (restaurantId !== req.user.restaurantId) {
      return res.status(403).json({ message: "Access denied" });
    }

    const start = new Date();
    start.setDate(1);
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);

    const orders = await Order.find({ 
      restaurant: restaurantId, 
      createdAt: { $gte: start, $lte: end } 
    });

    const totalOrders = orders.length;
    const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    const avgOrderValue = totalOrders ? totalSales / totalOrders : 0;
    const mostOrderedItems = getMostOrderedItems(orders);
    const uniqueUsers = new Set(orders.map(o => o.user.toString())).size;

    res.json({ totalOrders, totalSales, avgOrderValue, mostOrderedItems, uniqueUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { dailyReport, weeklyReport, monthlyReport };
