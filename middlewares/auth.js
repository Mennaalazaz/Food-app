const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ error: "Token missing" });
    }

    const extractedToken = token.split(" ")[1]; // "Bearer TOKEN_HERE"

    jwt.verify(extractedToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid token" });

        req.user = decoded; // attach user info to request
        next();
    });
};

module.exports = verifyToken;

// EXPLANATION:
// clients send tokens inside the header: "Authorization: Bearer TOKEN_HERE"
// checks if the header exists , If not → user didn’t send token.
// Header format: "Bearer ABCDEF12345" → we split by space and get the token part.
// jwt.verify checks if the token is valid using the secret key.
// If valid, we attach decoded user info to req.user for further use in protected routes.