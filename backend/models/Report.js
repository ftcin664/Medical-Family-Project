const mongoose = require('mongoose');

// Define the Report schema
const reportSchema = new mongoose.Schema({
    reporting_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // References the User model
    },
    reported_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // References the User model
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: 'Pending',
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;