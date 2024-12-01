module.exports = {
    jwtSecret: process.env.JWT_SECRET, // Use environment variable for secret key
    jwtExpiry: process.env.JWT_EXPIRY || '1h', // Use environment variable for token expiration time, default to '1h'
};