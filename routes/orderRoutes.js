const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// Customer
router.post('/', auth.verifyToken, auth.verifyUser, orderController.createOrder);
router.get('/user', auth.verifyToken, auth.verifyUser, orderController.getUserOrders);
router.get('/:id', auth.verifyToken, auth.verifyUser, orderController.getOrderById);

// Admin / Restaurant
router.get('/restaurant/:id', auth.verifyToken, auth.verifyAdmin, orderController.getRestaurantOrders);
router.put('/:id/status', auth.verifyToken, auth.verifyAdmin, orderController.updateOrderStatus);
module.exports = router;
