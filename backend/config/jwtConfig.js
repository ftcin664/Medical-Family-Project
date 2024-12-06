
require('dotenv').config();

module.exports = {
    secret: process.env.JWT_SECRET, // Use environment variable for secret key
    expiresIn: process.env.JWT_EXPIRY || '1h', // Use environment variable for token expiration time, default to '1h'
};