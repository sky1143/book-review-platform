const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        })
        console.log("MONGO DB CONNECTED")
    } catch (error) {
        console.log("monogdb connection error", error);
        process.exit(1);
    }
}

module.exports = connectDB