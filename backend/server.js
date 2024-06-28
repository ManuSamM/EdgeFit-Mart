import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import productRouter from './routes/productRoutes.js';
import signUpRouter from './routes/signUpRoutes.js';
import signInRouter from './routes/signInRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust to your frontend's URL
    credentials: true, // Allow credentials (cookies) to be included in requests
}));

app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/products');

app.use('/api', productRouter);
app.use('/api', signUpRouter);
app.use('/api', signInRouter);
app.use('/api', wishlistRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
