const express = require('express');
const router = express.Router();
const { verifyToken, isRestaurant } = require('../middleware/authMiddleware');
const reportsController = require('../controllers/reportsController.js');

router.get('/reports/daily/:restaurantId', verifyToken, isRestaurant, reportsController.dailyReport);
router.get('/reports/weekly/:restaurantId', verifyToken, isRestaurant, reportsController.weeklyReport);
router.get('/reports/monthly/:restaurantId', verifyToken, isRestaurant, reportsController.monthlyReport);

module.exports = router;
