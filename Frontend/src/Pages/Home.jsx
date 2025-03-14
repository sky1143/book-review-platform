import React from 'react'
import Categories from './Categories'
import BestSellingBooks from './BestSellingBooks'
const Home = () => {
  return (
    <>
    
   
   <div className=" flex flex-col">
  <div className="flex flex-col md:flex-row h-auto md:h-[65vh] bg-pink-50 justify-between items-center p-6 ">
    
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 px-4 md:px-20 text-center md:text-left">
      <h2 className="text-lg md:text-xl text-gray-600 py-2 md:py-4">THE TALETONE EDITORS:</h2>
      <h3 className="text-3xl md:text-4xl mt-2">Featured Books of the</h3>
      <h1 className="text-2xl md:text-3xl font-extrabold mt-1">March</h1>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
        See More
      </button>
    </div>

    {/* Right Side - Images */}
    <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center relative mt-6 md:mt-0">
    
      
  {/* First Image */}
  <img
    className="
      h-32 w-24 xs:h-36 xs:w-28 sm:h-44 sm:w-32 md:h-56 md:w-36 
      object-cover relative left-40 rounded-md shadow-2xl shadow-black/70"
    src="https://th.bing.com/th/id/OIP.0qxWWiv5uAS-T2OK11jpawHaLZ?rs=1&pid=ImgDetMain"
    alt=""
  />
  
  {/* Second Image - Half Above First Image */}
  <img
    className="
      h-34 w-24 xs:h-36 xs:w-28 sm:h-44 sm:w-32 md:h-56 md:w-36 
      absolute left-0 object-cover rounded-md shadow-2xl shadow-black/70"
    src="https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg"
    alt=""
  />

  {/* Third Image - Largest and Front */}
  <img
    className="
      h-38 w-40 xs:h-60 xs:w-36 sm:h-72 sm:w-44 md:h-74 md:w-48 
      absolute top-[-26%] right-30 left-48 object-cover rounded-md shadow-2xl z-40 shadow-black/90"
    src="https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1.jpeg"
    alt=""
  />

  {/* Fourth Image - Overlapping Third and Fifth */}
  <img
    className="
      h-40 w-30 xs:h-44 xs:w-32 sm:h-52 sm:w-36 md:h-60 md:w-30 
      absolute top-[-7%] left-28 object-cover rounded-md shadow-2xl z-10 shadow-black/70"
    src="https://th.bing.com/th/id/OIP.x5fTvUbrlDQcN4RKw5DDsQAAAA?w=470&h=750&rs=1&pid=ImgDetMain"
    alt=""
  />

  {/* Fifth Image */}
  <img
    className="
      h-40 w-30 xs:h-44 xs:w-32 sm:h-52 sm:w-36 md:h-60 md:w-30 
      absolute top-[-7%] left-80 object-cover rounded-md shadow-2xl z-10 shadow-black/70"
    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700575453i/202491053.jpg"
    alt=""
  />
  
  
</div>

  </div>
<Categories/>
<BestSellingBooks/>
</div>

</>
  )
}

export default Home