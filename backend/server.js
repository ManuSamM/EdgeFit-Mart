import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';
import signUpRouter from './routes/signUpRoutes.js';
import signInRouter from './routes/signInRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/products');

app.use('/api', productRouter);
app.use('/api', signUpRouter);
app.use('/api', signInRouter);
app.use('/api', wishlistRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
