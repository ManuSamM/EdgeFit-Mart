import express from 'express';
import { addToWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

// POST route to add a product to the wishlist
// router.post('/:userId/add', addToWishlist);

router.post('/user/:userId/wishlist/add', addToWishlist);

export default router;