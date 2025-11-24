// Handles authentication and role-based access control
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "Token missing" });

  const extractedToken = token.split(" ")[1]; // "Bearer TOKEN"
  jwt.verify(extractedToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    req.user = decoded; // attach decoded info (id, role, etc.)
    next();
  });
};

// Middleware to allow only admin (restaurant) access
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

// Middleware to allow only regular users (customers)
const verifyUser = (req, res, next) => {
  if (req.user.role !== 'user') {
    return res.status(403).json({ error: "User access required" });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin, verifyUser };
