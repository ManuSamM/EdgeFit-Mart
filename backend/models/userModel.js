import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    cart: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ],
    wishlist: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
        }
    ]
});

const User = mongoose.model('User', userSchema);

export default User;
