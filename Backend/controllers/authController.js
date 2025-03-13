const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


//register user

const registerUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, isAdmin } = req.body;

        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        } else {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = new User({
                firstname,
                lastname,
                email,
                password: hashedPassword,
                isAdmin: isAdmin || false,
            })
            await user.save();

            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            return res.status(201).json({ message: "User registered Sucessfully", token });

        }
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'invalid email or password' })
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            )

            res.status(201).json({ message: 'user login sucessfully' ,token});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

const logoutUser = (req, res) => {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: "Logout successful" });
};


module.exports = { registerUser, loginUser, logoutUser }