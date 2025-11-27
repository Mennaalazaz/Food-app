const { Order_Details, Order_Item, Food } = require("../models");

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

module.exports = { placeOrder, getUserOrders, getOrdersByRestaurant };