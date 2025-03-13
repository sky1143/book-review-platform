const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userConntroller')
const { secure } = require('../middleware/authmiddleware');

const router = express.Router();

router.get('/:id', secure, getUserProfile);
router.put('/:id', secure, updateUserProfile);

module.exports = router;