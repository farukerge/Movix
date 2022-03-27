import React from 'react'
import { BsBell, BsSearch } from 'react-icons/bs'

import BrandLink from '../BrandLinks/BrandLink'
import NavLinks from '../NavLinks/NavLinks'

function NavBar() {
 
    return (
        <nav className=' font-krona text-sm text-gray-400 bg-black '>
            <div className='flex items-center justify-between container mx-auto py-4'>

                {/* logo */}
                <BrandLink />

                <div className='flex'>

                {/* Navigation links */}
                <NavLinks />
                
                {/* Icons */}
                   <BsSearch className=' text-l mx-4 text-white' />
                   <BsBell  className='text-l text-white'/>
                </div> 
                    
            </div>
       </nav>
  )
}

export default NavBar