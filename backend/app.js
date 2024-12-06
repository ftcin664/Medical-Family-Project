// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const db = require('./models');
const { authRoutes, userRoutes } = require('./routes');
const app = express();
const { authMiddleware } = require('./middleware/authMiddleware');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app;