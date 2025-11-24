const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth'); 
const {
    createRestaurantController,
    getAllRestaurantsController,
    getRestaurantByIdController,
    updateRestaurantController,
    deleteRestaurantController
} = require('../controllers/restaurantController');

// CRUD routes
router.post('/', verifyToken, createRestaurantController); // create
router.get('/', getAllRestaurantsController);              // read all
router.get('/:id', getRestaurantByIdController);           // read one
router.put('/:id', verifyToken, updateRestaurantController); // update
router.delete('/:id', verifyToken, deleteRestaurantController); // delete

module.exports = router;
