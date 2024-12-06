require('dotenv').config();

module.exports = {
    email: process.env.EMAIL,
    name: process.env.NAME,
    apiKey: process.env.BREVO_API_KEY
};