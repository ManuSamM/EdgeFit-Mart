// controllers/wishlistController.js
import User from '../models/userModel.js';

// Controller function to add a product to the wishlist
export const addToWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        // Check if the product is already in the wishlist
        if (user.wishlist.some(item => item.product.toString() === productId)) {
            return res.status(400).json({ success: false, message: 'Product already in wishlist' });
        }

        // Add the product to the wishlist
        user.wishlist.push({ product: productId });  // Changed 'productId' to 'product' to match the schema
        await user.save();
        res.status(201).json({ success: true, message: 'Product added to wishlist', data: user.wishlist });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
