import express from 'express';
import { addReview, getAllReviews } from '../controllers/reviewController.js';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.post('/reviews', authenticateUser, addReview);
router.get('/reviews/:id', getAllReviews);

export default router;
