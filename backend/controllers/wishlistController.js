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


// Controller function to remove a product from the wishlist
export const removeFromWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        // Find the index of the product in the wishlist
        const wishlistItemIndex = user.wishlist.findIndex(item => item.product.toString() === productId);

        if (wishlistItemIndex !== -1) {
            // Remove the product from the wishlist
            user.wishlist.splice(wishlistItemIndex, 1);
            await user.save();
            res.status(200).json({ success: true, message: 'Product removed from wishlist', data: user.wishlist });
        } else {
            res.status(404).json({ success: false, message: 'Product not found in wishlist' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};