const { User } = require('../models');

const crypto = require('crypto'); // For generating OTP
const jwt = require('jsonwebtoken');

const SibApiV3Sdk = require('sib-api-v3-sdk');
const client = SibApiV3Sdk.ApiClient.instance;

const { generateToken } = require('../utils/jwt.js');
const mailConfig = require('../config/mailConfig');
const { jwtConfig } = require('../config/jwtConfig');

const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

require('dotenv').config();

// Function to send OTP
const sendOtp = async (email, otp) => {
    const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();
    const emailData = {
        sender: { email: mailConfig.email, name: mailConfig.name },
        to: [{ email: email }],
        subject: 'Your OTP Code',
        textContent: `Your OTP code is ${otp}`,
    };

    try {
        const response = await transactionalEmailsApi.sendTransacEmail(emailData);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Signup function
const signUp = async (req, res) => {
    const { fullName, email, password, phone, dob, gender, country, city } = req.body;
    const otp = crypto.randomInt(1000, 9999).toString(); // Generate a 4-digit OTP
    const otpExpiration = Date.now() + 300000; // OTP valid for 5 minutes (300000 ms)
    
    const image = req.file ? req.file.path : null; // Get the file path from multer

    try {
        // Create user in the database
        const newUser = new User({
            fullname: fullName,
            email,
            password, // Password will be hashed in the User model
            phone_number: phone,
            dob,
            gender,
            country,
            city,
            image_url: image, // Store the image path in the database
            otp,
            otp_expiration: otpExpiration 
        });
        await newUser.save();

        // Send OTP to user's email
        await sendOtp(email, otp);

        res.status(200).json({ id: newUser.id, message: 'User created. OTP sent to email.' });
    } catch (error) {
        console.error('Error signing up user:', error); // Log the error for debugging
        res.status(500).json({ error: 'Error signing up user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored hashed password using User model method
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate a token
        const token = generateToken(user._id); // Use Mongoose's _id and JWT secret from config

        // Return user info and token
        res.status(200).json({
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                phone_number: user.phone_number,
                dob: user.dob,
                gender: user.gender,
                country: user.country,
                city: user.city,
                image_url: user.image_url,
                status: user.status,
            },
            token,
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Error logging in user' });
    }
};

const logInWithToken = async (req, res) => {
    const { token } = req.body;
    try {
        // Verify the token
        const decodedToken = jwt.verify(token, jwtConfig.secret);
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return user info and token
        res.status(200).json({
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                phone_number: user.phone_number,
                dob: user.dob,
                gender: user.gender,
                country: user.country,
                city: user.city,
                image_url: user.image_url,
                status: user.status,
            },
            token,
        });
    } catch (error) {
        console.error('Error logging in user with token:', error);
        res.status(500).json({ error: 'Error logging in user with token' });
    }
};

const verifyOtp = async (req, res) => {
    const { id, otp } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        console.log(id, user, otp)
        // Check if OTP is valid and not expired
        if (user.otp == otp) {
            if (Date.now() > user.otp_expiration) {
                return res.status(400).json({ error: 'OTP has expired' });
            }
            console.log("A")
            const token = generateToken(user._id);
            user.status = true; // Set status to true
            console.log("B")
            await user.save(); // Save the updated user record

            res.status(200).json({ user: user, token: token });
        } else {
            res.status(400).json({ error: 'Invalid OTP' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error verifying OTP' });
    }
};

module.exports = { signUp, verifyOtp, login, logInWithToken };