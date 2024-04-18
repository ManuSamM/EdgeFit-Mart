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

// Route to fetch a single product by ID
productRouter.get('/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default productRouter;
