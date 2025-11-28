const { Order_Details, Order_Item, Food, Review } = require("../models");

const placeOrder = async (req, res) => {
  const { userId, restaurantId, cart, paymentMethod } = req.body;

  try {
    if (!cart || cart.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Calculate total price
    let totalPrice = 0;
    for (let item of cart) {
      const food = await Food.findByPk(item.foodId);
      if (!food)
        return res.status(400).json({
          message: `Food ID ${item.foodId} not found`,
        });

      totalPrice += food.Price * item.quantity;
    }

    // Create order
    const order = await Order_Details.create({
      User_ID: userId,
      Restaurant_ID: restaurantId,
      Price: totalPrice,
      Payment_Method: paymentMethod || "cash",
      status: "pending",
    });

    // Create each order item
    for (let item of cart) {
      const food = await Food.findByPk(item.foodId);

      await Order_Item.create({
        Order_ID: order.Order_ID,
        Food_ID: food.Food_ID,
        Quantity: item.quantity,
        Price: food.Price,
        Subtotal: food.Price * item.quantity,
      });
    }

    return res.status(201).json({
      message: "Order placed successfully",
      orderId: order.Order_ID,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserOrders = async (req, res) => {
  const userId = req.params.user_id;

  try {
    const orders = await Order_Details.findAll({
      where: { User_ID: userId },
      include: [
        {
          model: Order_Item,
          include: [Food],
        },
      ],
    });

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getOrdersByRestaurant = async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const orders = await Order_Details.findAll({
      where: { Restaurant_ID: restaurantId },
      include: [
        {
          model: Order_Item,
          include: [Food],
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  } 
};

//update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "confirmed", "preparing", "ready", "delivered", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
        valid: validStatuses,
      });
    }

    const order = await Order_Details.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.json({
      message: "Order status updated",
      status: order.status,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//get order status for a specific orderr
const getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order_Details.findByPk(orderId, {
      include: [
        {
          model: Order_Item,
          include: [Food],
        },
      ],
    });

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({
      orderId: order.Order_ID,
      status: order.status,
      items: order.Order_Items,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//adding a review
const addReview = async (req, res) => {
  try {
    const { userId, restaurantId, foodId, rating, comment } = req.body;

    if (!rating)
      return res.status(400).json({ message: "Rating is required" });

    const review = await Review.create({
      User_ID: userId,
      Restaurant_ID: restaurantId || null,
      Food_ID: foodId || null,
      Rating: rating,
      Comment: comment || "",
    });

    res.status(201).json({
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// to get all the reviews for food or restaurant
const getReviews = async (req, res) => {
  try {
    const { id, type } = req.params; //type is food or restauranttt

    let whereCondition = {};

    if (type === "food") whereCondition.Food_ID = id;
    else if (type === "restaurant") whereCondition.Restaurant_ID = id;
    else return res.status(400).json({ message: "Invalid type" });

    const reviews = await Review.findAll({ where: whereCondition });

    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
  getOrdersByRestaurant,
  updateOrderStatus,
  getOrderStatus,
  addReview,
  getReviews,
};