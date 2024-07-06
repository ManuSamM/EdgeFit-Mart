import User from '../models/userModel.js';

// Controller function to add a product to the cart
export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.params.userId;
    const addQuantity = quantity > 0 ? quantity : 1;  // Ensure at least 1 quantity is added

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Find if the product is already in the cart
        const cartItem = user.cart.find(item => item.product.toString() === productId);

        if (cartItem) {
            // If found, increase the quantity
            cartItem.quantity += addQuantity;
        } else {
            // If not found, add the new product to the cart
            user.cart.push({ product: productId, quantity: addQuantity });
        }

        await user.save();
        res.status(201).json({ success: true, message: 'Product added to cart', cart: user.cart });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Controller function to remove a product from the cart
export const removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Find the index of the product in the cart
        const cartItemIndex = user.cart.findIndex(item => item.product.toString() === productId);

        if (cartItemIndex !== -1) {
            // Remove the product from the cart
            user.cart.splice(cartItemIndex, 1);
            await user.save();
            res.status(200).json({ success: true, message: 'Product removed from cart', cart: user.cart });
        } else {
            // If the product is not in the cart
            res.status(404).json({ success: false, message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error('Error removing from cart:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
