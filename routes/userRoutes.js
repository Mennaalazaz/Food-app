const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/profile', auth.verifyToken, auth.verifyUser, userController.getProfile);
router.put('/profile', auth.verifyToken, auth.verifyUser, userController.updateProfile);
router.get('/orders', auth.verifyToken, auth.verifyUser, userController.getOrderHistory);

module.exports = router;
