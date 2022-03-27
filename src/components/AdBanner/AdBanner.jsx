import React from 'react'


function AdBanner() {
  return (
    <div className=' adBanner  h-80  w-2/4 mx-auto flex flex-col justify-center p-6 '>  
        <h1 className=' text-2xl text-yellow-50 font-bold w-53'>Explore more and more exclusive movies with Movix Premium</h1>
          <div className='flex items-center mt-8'>
            <button className=' bg-orange-500 rounded-xl p-2 text-sm'>Get Started</button>
            <p className=' text-sm ml-4 text-yellow-50 font-semibold'>Only 10$/month</p>
          </div>
    </div>
  )
}

export default AdBanner


