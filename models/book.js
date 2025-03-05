const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 10,
        trim: true,
    },
    description: {
        type: String,
        minlength: 30,

    },
    author: {
        type: String,
        required: true,
        minlength: 6,
    }

})

module.exports = mongoose.model('Book', bookSchema);