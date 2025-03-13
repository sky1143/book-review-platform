import React from 'react'
const categories = () => {
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
     
      
        {/* Box 1 */}
        <div className=' bg-[#88cee1] p-4 rounded-lg flex flex-col items-center justify-between'>
          <img className='h-20 w-20 object-cover' src='https://cdn-icons-png.flaticon.com/512/8635/8635996.png' alt="" />
          <h2 className='font-semibold text-center truncate'>
            Arts & Photography
          </h2>
          <button className='text-gray-500 text-base  hover:text-white'>Shop now</button>
        </div>




        {/* Box 2 */}
        <div className='w-48 h-50 bg-[#d4f2a7] p-4 rounded-lg flex flex-col items-center justify-between'>
          <img className='h-20 w-20 ' src='https://th.bing.com/th/id/R.e0b5a2e36be1a6ed7fb050930204b819?rik=%2bpASqZKu4zwB5g&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKcn%2fXKX%2fKcnXKXEBi.png&ehk=KIYarE8it%2fqQ%2fpJDglcPKr4s4FglNFvMja8pObiMdOQ%3d&risl=&pid=ImgRaw&r=0' alt="" />
          <h2 className='font-semibold text-center truncate'>
            Health in your hand
          </h2>
          <button className='text-gray-500 text-base hover:text-white'>Shop now</button>
        </div>

        {/* Box 3 */}
        <div className='w-48 h-50 bg-[#adadc9] p-4 rounded-lg flex flex-col items-center justify-between'>
          <img className='h-20 w-20 object-cover' src="https://cdn-icons-png.flaticon.com/512/7671/7671546.png" alt="" />
          <h2 className='font-semibold text-center truncate'>
            Horror Story
          </h2>
          <button className='text-gray-500 text-base hover:text-white'>Shop now</button>
        </div>

        {/* Box 4 */}
        <div className='w-48 h-50 bg-[#dd92e9] p-4 rounded-lg flex flex-col items-center justify-between'>
          <img className='h-20 w-20 object-cover' src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Butterflies-PNG/Blue_and_Purple_Butterfly_PNG_Clipar_Image.png?m=1629783646' alt="" />
          <h2 className='font-semibold text-center truncate'>
            Romance
          </h2>
          <button className='text-gray-500 text-base hover:text-white '>Shop now</button>
        </div>

        {/* Box 5 */}
        <div className='w-48 h-50 bg-[#f3c7bc] p-4 rounded-lg flex flex-col items-center justify-between'>
          <img className='h-20 w-20 object-cover' src='https://cdn-icons-png.flaticon.com/512/2178/2178197.png' alt="" />
          <h2 className='font-semibold text-center truncate'>
            Biography
          </h2>
          <button className='text-gray-500 text-base hover:text-white'>Shop now</button>
        </div>
        </div>
      </div>

    </>
  )
}

export default categories
















{/* <img className='h-20 w-20 object-cover' src="https://cdn-icons-png.flaticon.com/512/5100/5100611.png" alt="" />
        <img className='h-20 w-20 object-cover' src="https://i.pinimg.com/originals/6b/0c/c1/6b0cc1c6326d1099495b6795817d6517.gif" alt="gif" />
        <img  className='h-20 w-20 object-cover'src="https://cdn-icons-png.flaticon.com/512/4811/4811032.png" alt="" />
        <img  className='h-20 w-20 object-cover'src="https://cdn-icons-png.flaticon.com/512/8356/8356930.png" alt="" /> */}
