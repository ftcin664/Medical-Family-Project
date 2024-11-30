// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    image_url: {
        type: String,
        required: false,
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: function(dob) {
                return dob <= new Date();
            },
            message: 'Date of birth cannot be in the future',
        },
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Nobinary'],
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    otp_expiration: {
        type: Date,
        required: false,
    },
    otp: {
        type: Number,
        required: false,
    },
    father: {
        type: Object,
    }, 
    mother: {
        type: Object,
    },
    sibling: {
        type: Object,
    },
    partner: {
        type: Object,
        default: {},
    },
    children: {
        type: Array,
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Pre-save middleware to hash the password
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

// Compare password method
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;