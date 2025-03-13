    const jwt = require('jsonwebtoken');
    const User = require('../models/user')
    const dotenv = require('dotenv');
    dotenv.config();

    const secure =  async (req, res, next) => {
        let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }
        

        try {
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id).select('-password');

            if(!user){
                return res.status(401).json({ message: 'User not found'});
            }
            req.user = user;

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });

        }
    }

    const admin = (req, res, next) => {
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: 'Admin access required' });
        }

    };

    module.exports = { secure, admin }