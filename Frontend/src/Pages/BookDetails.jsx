import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import books from '../Pages/js/data';

const BookDetails = () => {
    const { id } = useParams();
    const book = books.find((book) => book.id === parseInt(id));

    const [reviews, setReviews] = useState(book?.reviews || []);
    const [newReview, setNewReview] = useState({
        user: '',
        comment: '',
        rating: ''
    });

    if (!book) return <div>Book Not Found</div>;

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle adding a new review
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.user && newReview.comment && newReview.rating) {
            setReviews((prev) => [...prev, newReview]);
            setNewReview({ user: '', comment: '', rating: '' }); // Reset form
        }
    };

    return (
        <div className='max-w-4xl mx-auto mt-6 p-6 border border-gray-200 rounded-lg shadow-md'>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Book Image */}
                <div className="w-full">
                    <img
                        className='w-full h-auto max-h-[400px] object-fill object-center rounded-lg'
                        src={book.imageUrl}
                        alt={book.title}
                    />
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-center">
                    <h1 className='text-xl sm:text-2xl font-bold'>{book.title}</h1>
                    <p className='text-gray-600 mt-2 text-sm sm:text-base'>
                        {book.description2}
                    </p>

                    {/* Author & Price */}
                    <div className='mt-3 flex justify-between items-center'>
                        <p className='text-sm sm:text-base'>
                            Author: <strong>{book.author}</strong>
                        </p>
                        <h3 className='text-sm sm:text-base font-semibold'>{book.price}</h3>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className='mt-6'>
                <h2 className='text-lg sm:text-xl font-semibold'>Reviews</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className='border border-gray-100 p-4 rounded-lg shadow-sm'
                        >
                            <p>
                                <strong>{review.user}</strong>: {review.comment}
                            </p>
                            <p>Rating: {review.rating} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add a Review Section */}
            <div className='mt-6 border-t pt-4'>
                <h2 className='text-lg sm:text-xl font-semibold'>Add a Review</h2>
                <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="user"
                        placeholder="Your Name"
                        value={newReview.user}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                    />
                    <textarea
                        name="comment"
                        placeholder="Your Review"
                        value={newReview.comment}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                    />
                    <select
                        name="rating"
                        value={newReview.rating}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-lg w-full"
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="1">1 ⭐</option>
                        <option value="2">2 ⭐</option>
                        <option value="3">3 ⭐</option>
                        <option value="4">4 ⭐</option>
                        <option value="5">5 ⭐</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookDetails;
