const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

// Function to generate JWT token
const generateToken = (userId) => {
    const secretKey = jwtConfig.secret; // Use the secret key from config
    const expiresIn = jwtConfig.expiresIn; // Token expiration time from config
    console.log(secretKey, expiresIn)
    return jwt.sign({ id: userId }, secretKey, { expiresIn });
};

module.exports = { generateToken };