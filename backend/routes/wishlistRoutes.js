import express from 'express';
import { addToWishlist, removeFromWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.post('/user/:userId/wishlist/add', addToWishlist);
router.delete('/user/:userId/wishlist/remove', removeFromWishlist);

export default router;