const Book = require('../models/book')

const getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseFloat(req.query.page) || 10;
        const skip = (page - 1) * limit;
        const books = await Book.find().skip(skip).limit(limit);
        const totalBooks = await Book.countDocuments();

        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found' })
        }
        return res.json({ message: 'Book fetched successfully', totalBooks, page, limit, books });
    } catch (error) {
        res.status(500).json({ message:`Error fetching books :${error.message}` });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }
        res.status(200).json({ message: 'Book retrieved successfully', book });

    } catch (error) {
        res.status(500).json({ message: `Error retrieved Book :${error.message}` })
    }
}

const addBook = async (req, res) => {
    try {

        const { title, description, author } = req.body;
        if (!title || !description || !author) {
            return res.status(400).json({ message: 'All fields are required ' })
        }

        const existingBook = await Book.findOne({ title});
        if( existingBook ) {
            return res.status(400).json({ message: 'Book with this title already exists'});
        }
        const book = new Book({ title, description, author })
        await book.save();
        res.status(201).json({ message: 'Book added successfully', book })

    } catch (error) {
        console.log("Error adding books", error.message);
        res.status(500).json({ message: `Internal Server Error: ${error.message}` })
    }
}

module.exports = { getAllBooks, getBookById, addBook }