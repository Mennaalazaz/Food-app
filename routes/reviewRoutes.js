const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/authMiddleware');

// Customer
router.post('/', auth.verifyToken, auth.verifyUser, reviewController.addReview);

// Public
router.get('/food/:foodId', reviewController.getReviewsByFood);

module.exports = router;
