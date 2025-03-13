const express = require('express');
const { secure, admin } = require('../middleware/authmiddleware');
const { getAllBooks, getBookById, addBook } = require('../controllers/bookController')
const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);

router.post('/', secure, admin, addBook);

module.exports = router