import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const signInRouter = express.Router();

// Generate a secure random secret key
// const secretKey = crypto.randomBytes(32).toString('hex');

// Secret key for JWT
const secretKey = 'your_secret_key'; // This should be securely stored, preferably as an environment variable

signInRouter.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check the password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If the credentials are valid, generate a JWT token
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '24h' });

        // Send a token and user info in the response
        console.log("SignIn successful");
        res.status(200).json({ message: 'Sign-in successful', token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default signInRouter;