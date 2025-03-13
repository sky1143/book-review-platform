import React from 'react'
import books from '../Pages/js/data'
import { useNavigate } from 'react-router-dom';
const BestSellingBooks = () => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/book/${id}`)
  }

  return (
    <div className='w-full flex mt-20  ml-4 justify-center flex-wrap'>

      {/* Title Section */}
      <div className='w-full flex items-center justify-between px-4 md:px-20'>
        <h2 className='text-lg md:text-2xl font-semibold'>Best Selling Books</h2>
        <h4 className='text-sm md:text-base font-semibold text-gray-500 flex items-center gap-1'>
          View All
          <span>
            <i className="text-gray-500 ri-arrow-right-wide-line"></i>
          </span>
        </h4>
      </div>

      {/* Book Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5  gap-4 mt-8 px-4'>
        {books.map((book) => (


          // {/* Box 1 */}
          <div key={book.id}
            className='w-full max-w-[200px] border border-gray-200 p-4 rounded-lg flex flex-col items-center justify-between'
            onClick={() => handleClick(book.id)}
          >
            <img
              className='h-40 w-28 object-cover mt-4 mb-2'
              src={book.imageUrl}
              alt={book.title} />
            <div className='flex flex-col justify-start text-center'>
              <h1 className='text-orange-500'>{book.title}</h1>
              <p className='text-sm truncate'>
                {book.description}
              </p>
              <p className='text-gray-600'>{book.author}</p>
              <h3>{book.price}</h3>
            </div>
          </div>
        ))}

      </div>

    </div>

  )
}

export default BestSellingBooks