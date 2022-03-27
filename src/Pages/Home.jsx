import React from 'react'
import AdBanner from '../components/AdBanner/AdBanner'



function Home() {
  return (
    <div className=' bg-black'>
      {/* 
      Main Banner
      Action genre
      upcoming
      new movies
      subscribeAd
      Find your favoruite genre search */}
      <div className='py-8'>
        <AdBanner/>
      </div>
    </div>
  )
}

export default Home