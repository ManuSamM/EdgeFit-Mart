import express from 'express';
import { addToCart, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/:userId/cart', addToCart);
router.delete('/:userId/cart', removeFromCart);

export default router;
