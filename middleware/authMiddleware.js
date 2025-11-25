// Handles authentication and isRestaurant/isUser checks.
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: "Token missing" });

  const extractedToken = token.split(" ")[1]; // "Bearer TOKEN_HERE"

  jwt.verify(extractedToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.user = decoded; // { id: userId } or { restaurantId: restaurantId }
    next();
  });
};

// Check if logged in entity is a restaurant
const isRestaurant = (req, res, next) => {
  if (!req.user.restaurantId) return res.status(403).json({ error: "Not a restaurant" });
  next();
};

// Check if logged in entity is a normal user
const isUser = (req, res, next) => {
  if (!req.user.id) return res.status(403).json({ error: "Not a user" });
  next();
};

module.exports = { verifyToken, isRestaurant, isUser };
