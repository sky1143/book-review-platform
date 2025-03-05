const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require('./config/db')
dotenv.config();


const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({ origin: '*' }))
app.get("/", (req, res) => {
    res.send({ message: "api is running" })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `)
})