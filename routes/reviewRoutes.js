const express = require('express')
const router = express.Router();
const {getReview, submitReview } = require('../controllers/reviewController'); 
const { secure } = require('../middleware/authmiddleware');


router.get('/', getReview);
router.post('/', secure, submitReview);

module.exports = router;
