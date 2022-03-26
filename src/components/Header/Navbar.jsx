import React from 'react'
import { GrSearch } from 'react-icons/gr'
import { BsBell, BsSearch } from 'react-icons/bs'
import NavLinks from './NavLinks'
import BrandLink from '../BrandLinks/BrandLink'

function NavBar() {
 
    return (
        <nav className=' font-krona text-sm text-gray-400  '>
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