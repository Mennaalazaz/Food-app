const Restaurant = require('../models/Restaurant');

// Create a new restaurant
const createRestaurantController = async (req, res) => {
  try {
    const { name, email, phone, address, logoURL, foods, delivery, pickup, isOpen, rating } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Check if restaurant already exists
    const existedRestaurant = await Restaurant.findOne({ where: { email } });
    if (existedRestaurant) {
      return res.status(409).json({ error: "Restaurant with this email already exists" });
    }

    const newRestaurant = await Restaurant.create({
      name,
      email,
      phone,
      address,
      logoURL,
      foods: foods || [],
      delivery: delivery || false,
      pickup: pickup || false,
      isOpen: isOpen !== undefined ? isOpen : true,
      rating: rating || 0
    });

    res.status(201).json({ message: "Restaurant created successfully", restaurant: newRestaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create restaurant" });
  }
};

// Get all restaurants
const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
};

// Get a single restaurant by ID
const getRestaurantByIdController = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id); 
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
};

// Update restaurant
const updateRestaurantController = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

    const { name, email, phone, address, logoURL, foods, delivery, pickup, isOpen, rating } = req.body;

    restaurant.name = name || restaurant.name;
    restaurant.email = email || restaurant.email;
    restaurant.phone = phone || restaurant.phone;
    restaurant.address = address || restaurant.address;
    restaurant.logoURL = logoURL || restaurant.logoURL;
    restaurant.foods = foods || restaurant.foods;
    restaurant.delivery = delivery !== undefined ? delivery : restaurant.delivery;
    restaurant.pickup = pickup !== undefined ? pickup : restaurant.pickup;
    restaurant.isOpen = isOpen !== undefined ? isOpen : restaurant.isOpen;
    restaurant.rating = rating || restaurant.rating;

    await restaurant.save();

    res.status(200).json({ message: "Restaurant updated successfully", restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update restaurant" });
  }
};

// Delete restaurant
const deleteRestaurantController = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

    await restaurant.destroy();
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete restaurant" });
  }
};

module.exports = {
    createRestaurantController,
    getAllRestaurantsController,
    getRestaurantByIdController,
    updateRestaurantController,
    deleteRestaurantController
};
