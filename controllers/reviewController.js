const Review = require('../models/review')

const getReview = async (req, res) => {
    try {
        const reviews = await Review.find()
        if (reviews === 0) {
            return res.status(404).json({ message: "No reviewsss found" });
        }
        return res.status(200).json({ message: "All reviewss fetched successfully", reviews });
    } catch (error) {
        console.log("Error in fetching reviewss:", error.message)
        res.status(500).json({ message: "Internal server error" });
    }
}

const submitReview = async (req, res) => {
    try {
        const { bookId, reviewText } = req.body;
        if (!bookId || !reviewText) {
            return res.status(400).json({ message: "All fields (bookId, reviewText) are required" });
        }
        const review = new Reviews({ bookId, reviewText });
        await review.save();
        res.status(201).json({ message: 'Added review', review })
    } catch (error) {
        console.log("Error submiting review", error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getReview, submitReview };