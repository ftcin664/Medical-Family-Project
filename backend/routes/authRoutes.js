// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Specify the directory to save uploaded files
    },
    filename: (req, file, cb) => {
        const randomName = crypto.randomBytes(16).toString('hex');
        // Extract the file extension using path.extname
        const extension = path.extname(file.originalname);
        // Combine random string and file extension
        cb(null, `${randomName}${extension}`);
    }
});

const upload = multer({ storage: storage });

router.post('/signup', upload.single('image'), authController.signUp); // Signup route
router.post('/verify-otp', authController.verifyOtp); // OTP verification route
router.post('/login', authController.login);

module.exports = router;