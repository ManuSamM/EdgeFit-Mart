import express from 'express';
import Product from '../models/productModel.js'; // Import the Product model

const productRouter = express.Router();

productRouter.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get('/image/:path', (req, res) => {
  const imagePath = req.params.path;
  res.sendFile(imagePath);
});

export default productRouter;
