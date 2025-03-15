import React from 'react'
import { categoriesFeatures } from './js/data'
const Categories = () => {
  return (
    <>
      <div className='w-full flex mt-8 ml-4 gap-6 justify-center flex-wrap'>

        <div className='w-full flex items-center justify-between px-4 md:px-20'>
          <h2 className='text-lg md:text-2xl font-semibold'>Featured Categories</h2>
          <h4 className='text-sm md:text-base font-semibold text-gray-500 flex items-center gap-1'>
            View All
            <span>
              <i className="text-gray-500 ri-arrow-right-wide-line"></i>
            </span>
          </h4>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 px-4'>
          {categoriesFeatures.map((category) => (


            <div key={category.id}
              className=' bg-[#88cee1] p-4 rounded-lg flex flex-col items-center justify-between' >
              <img className='h-20 w-20 object-cover' src={category.imageUrl} alt="" />
              <h2 className='font-semibold text-center truncate'>
                {category.title}
              </h2>
              <button className='text-gray-500 text-base  hover:text-white'>{category.para}</button>
            </div>

          ))}
        </div>
      </div >


    </>
  )
}

export default Categories
















{/* <img className='h-20 w-20 object-cover' src="https://cdn-icons-png.flaticon.com/512/5100/5100611.png" alt="" />
        <img className='h-20 w-20 object-cover' src="https://i.pinimg.com/originals/6b/0c/c1/6b0cc1c6326d1099495b6795817d6517.gif" alt="gif" />
        <img  className='h-20 w-20 object-cover'src="https://cdn-icons-png.flaticon.com/512/4811/4811032.png" alt="" />
        <img  className='h-20 w-20 object-cover'src="https://cdn-icons-png.flaticon.com/512/8356/8356930.png" alt="" /> */}
