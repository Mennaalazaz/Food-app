const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    // Check required fields
    if (!username || !email || !password || !address || !phone) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existedUser = await User.findOne({ where: { email } });

    if (existedUser) {
        return res.status(409).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        address,
        phone
    });

    // Create JWT token to help user stay logged in after registration
    const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.status(201).json({
        message: "User registered successfully",
        user: newUser,
        token
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Registration failed" });
    }
};


const LoginController = async(req, res) => {
    try {
        const {email, password} = req.body;
        // Check required fields
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        // Check if user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Compare password with hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
        return res.status(401).json({ error: "Invalid password" });
        }
        // Create JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.status(200).json({ message: "Login successful", user, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Login failed" });
    }
};

const updateProfileController = async (req, res) => {
    try {
        const userId = req.user.id; // from auth middleware
        const { username, address, phone ,password} = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.username = username || user.username;
        user.address = address || user.address;
        user.phone = phone || user.phone;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        await user.save();
        res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Profile update failed" });
    }
};

const deleteAccountController = async (req, res) => {
    try {
        const userId = req.user.id; // from auth middleware
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await user.destroy();
        res.status(200).json({ message: "Account deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Account deletion failed" });
    }
};
module.exports = { RegisterController, LoginController, updateProfileController, deleteAccountController };