const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require('./config/db')
dotenv.config();


const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json())

connectDB();

const authRoutes = require('./routes/authRoute');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);



app.use(cors({ origin: '*' }))
app.get("/", (req, res) => {
    res.send({ message: "api is running" })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `)
})