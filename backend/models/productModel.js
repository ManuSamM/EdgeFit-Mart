import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: Number,
  imagePath: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
