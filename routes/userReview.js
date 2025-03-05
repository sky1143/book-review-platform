const express = require('express');
const { secure } = require('../middleware/authmiddleware');
const { getUserProfile, updateUserProfile } = require('../controllers/userConntroller')
const router = express.Router();

router.get('/:id', secure, getUserProfile);
router.put('/:id', secure, updateUserProfile);

module.exports = router;