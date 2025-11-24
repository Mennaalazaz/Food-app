// Handles ratings and feedback.
const Review = require('../models/Review');

const addReview = async (req, res) => {
  const { foodId, rating, comment } = req.body;
  const review = await Review.create({ userId: req.user.id, foodId, rating, comment });
  res.status(201).json(review);
};

const getReviewsByFood = async (req, res) => {
  const reviews = await Review.findAll({ where: { foodId: req.params.foodId } });
  res.json(reviews);
};

module.exports = { addReview, getReviewsByFood };
