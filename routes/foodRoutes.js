const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const auth = require('../middleware/authMiddleware');

// Public
router.get('/', foodController.getAllFoods);
router.get('/:id', foodController.getFoodById);

// Admin only
router.post('/', auth.verifyToken, auth.isRestaurant, foodController.createFood);
router.put('/:id', auth.verifyToken, auth.isRestaurant, foodController.updateFood);
router.delete('/:id', auth.verifyToken, auth.isRestaurant, foodController.deleteFood);

module.exports = router;
