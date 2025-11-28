const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// Customer
router.get('/user/:user_id', auth.verifyToken, auth.isUser, orderController.getUserOrders);
router.post('/place', auth.verifyToken, auth.isUser, orderController.placeOrder);

// Admin / Restaurant
router.get('/restaurant/:id', auth.verifyToken, auth.isRestaurant, orderController.getOrdersByRestaurant);

//Order Status
router.put('/:orderId/status', auth.verifyToken, orderController.updateOrderStatus);
router.get('/:orderId/status', auth.verifyToken, orderController.getOrderStatus);

//Reviews
router.post('/reviews', auth.verifyToken, orderController.addReview);
router.get('/reviews/:type/:id', orderController.getReviews);

module.exports = router;