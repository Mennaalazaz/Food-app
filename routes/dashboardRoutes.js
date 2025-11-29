const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const restaurantAuth = require("../middleware/restaurantAuth");
const { verifyToken, isRestaurant } = require('../middleware/authMiddleware');


// Get orders
router.get("/orders/:restaurantId", restaurantAuth, dashboardController.getRestaurantOrders);

// Update order status
router.put("/order-status/:orderId", restaurantAuth, dashboardController.updateOrderStatus);

// Get stats
router.get("/stats/:restaurantId", restaurantAuth, dashboardController.getRestaurantStats);

module.exports = router;
