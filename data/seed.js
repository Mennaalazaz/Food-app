// this file seeds the database with initial dummy data for testing purposes

const { DATA } = require('./data'); // the DATA object you generated
const { sequelize } = require('./config/db');
const User = require('./models/User');
const Restaurant = require('./models/Restaurant');
const Category = require('./models/Category');
const MenuItem = require('./models/MenuItem');


(async () => {
  try {
    // Sync DB
    await sequelize.sync({ force: true });

    // Seed users
    for (let user of DATA.users) {
      await User.create(user);
    }

    // Seed restaurants
    for (let rest of DATA.restaurants) {
      await Restaurant.create(rest);
    }

    // Seed categories
    for (let cat of DATA.categories) {
      await Category.create(cat);
    }

    // Seed menu items
    for (let item of DATA.menuItems) {
      await MenuItem.create(item);
    }

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
  }
})();
