const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            length: 3
        },
        lastname: {
            type: String,
            required: true,
            length: 3
        },
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;