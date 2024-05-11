// routes/cartRoutes.js
import express from 'express';
import { addToCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/cart/:userId', addToCart);

export default router;
