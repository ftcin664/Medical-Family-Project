const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));