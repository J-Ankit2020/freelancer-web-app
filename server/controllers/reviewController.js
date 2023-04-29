import User from '../models/User.js';
import { UnAuthenticatedError, BadRequestError } from '../errors/index.js';

export const addReview = async (req, res) => {
  const { description, rating, userId } = req.body;
  if (!description || !rating || !userId) {
    throw new BadRequestError('please provide all value');
  }
  const user = await User.findById(req.user.userId);
  if (!user) {
    throw new UnAuthenticatedError('Invalid values user');
  }
  const review = {
    description,
    rating,
    userId,
  };

  user.reviews.push(review);
  user.averageRating = user.calculateAverageRating();
  await user.save();
  res.send('add review');
};

export const getAllReviews = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new UnAuthenticatedError('Invalid values user');
  }
  const reviews = user.reviews;
  res.send(reviews);
};
