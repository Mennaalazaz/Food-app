const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const auth = require('../middleware/authMiddleware');

// Public
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);

// Admin only
router.post('/', auth.verifyToken, auth.isRestaurant, restaurantController.createRestaurant);
router.put('/:id', auth.verifyToken, auth.isRestaurant, restaurantController.updateRestaurant);
router.delete('/:id', auth.verifyToken, auth.isRestaurant, restaurantController.deleteRestaurant);
router.get('/:id/dashboard', auth.verifyToken, auth.isRestaurant, restaurantController.getDashboard);

module.exports = router;
