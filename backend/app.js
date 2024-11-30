// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const db = require('./models');
const {authRoutes} = require('./routes');
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

// // Sync Sequelize models with the database
// db.sequelize.authenticate()
//   .then(() => console.log('Database connected successfully.'))
//   .catch(err => console.error('Error connecting to the database:', err));

// db.sequelize.sync({ force: false }) // Use force: true to drop and recreate tables
//   .then(() => console.log('Sequelize models synchronized.'))
//   .catch(err => console.error('Error syncing Sequelize models:', err));

app.use('/auth', authRoutes);

// const userRoutes = require('./routes/userRoutes');
// const requestRoutes = require('./routes/requestRoutes');
// const relativeRoutes = require('./routes/relativeRoutes');

// // Use routes
// app.use('/user', userRoutes);
// app.use('/request', authenticateToken, requestRoutes);
// app.use('/relative', relativeRoutes);
module.exports = app;