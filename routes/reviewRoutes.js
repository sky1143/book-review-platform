const express = require('express')
const { getReview, submitReview } = require('../controllers/reviewController');
const { secure } = require('../middleware/authmiddleware');

const router = express.Router();


router.get('/', getReview);
router.post('/', secure, submitReview);

module.exports = router;
