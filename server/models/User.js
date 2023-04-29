import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewText: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide a valid email',
    },
    unique: true,
  },
  reviews: [reviewSchema],

  password: {
    type: String,
    required: [true, 'please provide password'],
    minlength: 6,
    select: false,
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'my city',
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
});

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.calculateAverageRating = function () {
  const reviews = this.reviews;
  const numberOfReviews = reviews.length;
  let totalRating = 0;

  if (numberOfReviews === 0) {
    this.averageRating = 0;
    return;
  }

  reviews.forEach((review) => {
    totalRating += review.rating;
  });

  this.averageRating = totalRating / numberOfReviews;
};

UserSchema.methods.createJwt = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
export default mongoose.model('User', UserSchema);
