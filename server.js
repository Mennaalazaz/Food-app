const express = require('express');
require("dotenv").config();

const app = express();
const sequelize = require("./config/db");
require("./models");

sequelize.sync({ alter: true }).then(() => {
  console.log("All tables synced!");
});

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/restaurants", require("./routes/restaurantRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
