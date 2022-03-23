import React from 'react'
import { GrSearch } from 'react-icons/gr'
import { BsBell, BsSearch } from 'react-icons/bs'

function NavBar() {
    const links = [
        "Exclusive",
        "Trending", 
        "Upcoming",
        "Watchlist"
    ]
    return (
        <nav className=' font-krona text-sm text-gray-400  '>
            <div className='flex items-center justify-between container mx-auto py-4'>

                {/* logo */}
                <div><h1 className=' text-2xl font-krona text-orange-600'>Movix</h1></div>

                <div className='flex'>

                {/* Navigation links */}
                {links.map(link => (
                    <a href='/' key={link} className ="mr-5 hover:text-gray-500">{link}</a>
                ))}
                    
                {/* Icons */}
                   <BsSearch className=' text-l mx-4 text-white' />
                   <BsBell  className='text-l text-white'/>
                </div> 
                    
            </div>
       </nav>
  )
}

export default NavBar