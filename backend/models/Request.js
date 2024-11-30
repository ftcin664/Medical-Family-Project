const mongoose = require('mongoose');

// Define the Request schema
const requestSchema = new mongoose.Schema({
    requesting_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // References the User model
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: '{VALUE} is not a valid email!'
        },
    },
    relationship_type: {
        type: String,
        required: true,
        enum: ['Father', 'Mother', 'Child', 'Previous-Partner', 'Current-Partner', 'Sibling'],
    },
    additional_data: {
        type: Array,
        required: false,
        default: null,
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

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;