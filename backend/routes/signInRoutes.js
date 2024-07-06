import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const signInRouter = express.Router();

// Secret key for JWT (should be securely stored, preferably as an environment variable)
const secretKey = 'your_secret_key'; 

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
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        // Set the JWT as an HttpOnly cookie
        res.cookie('token', token, { httpOnly: true, secure: true });

        // Send a response without the token
        res.status(200).json({ message: 'Sign-in successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

signInRouter.get('/verify-token', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        res.status(200).json({ userId: decoded.userId });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});


export default signInRouter;
