const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// Customer
router.post('/', auth.verifyToken, auth.isUser, orderController.createOrder);
router.get('/user', auth.verifyToken, auth.isUser, orderController.getUserOrders);
router.get('/:id', auth.verifyToken, auth.isUser, orderController.getOrderById);

// Admin / Restaurant
router.get('/restaurant/:id', auth.verifyToken, auth.isRestaurant, orderController.getRestaurantOrders);
router.put('/:id/status', auth.verifyToken, auth.isRestaurant, orderController.updateOrderStatus);
module.exports = router;
