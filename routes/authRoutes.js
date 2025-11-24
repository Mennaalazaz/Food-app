const express = require('express');
const { LoginController,RegisterController, updateProfileController, deleteAccountController} = require('../controllers/authController');
const router = express.Router();
const verifyToken = require("../middlewares/auth");


// Define authentication routes here and their handlers and middlewares
router.post('/login', LoginController);
router.post('/register', RegisterController);
router.put('/profile', verifyToken, updateProfileController);
router.delete('/delete/:id', verifyToken, deleteAccountController);

module.exports = router;