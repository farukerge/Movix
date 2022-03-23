import React from 'react'
import { AiOutlineInstagram, AiFillFacebook,AiFillYoutube } from 'react-icons/ai'


function Footer() {
    const links = [
        "About",
        "Policy",
        "Customer Support",
        "Contact",
        "Recruit"
    ]
  return (
      <footer className=' bg-black h-auto flex border-y py-8 '>
          <div className='container mx-auto '> { /* Social media icons*/}
              <h1 className='text-white text-base'>Social</h1>
              <div className='flex mt-3'>
                <AiFillFacebook className=' text-white mr-2 text-xl' />
                <AiOutlineInstagram className='text-white mr-2 text-xl' />
                <AiFillYoutube className='text-white mr-2 text-xl' />
              </div>
              
              <div  className=' my-6 '> {/*footer links*/}
                  {links.map(link => (
                      <a href='/' key={link} className="mr-12 text-sm text-gray-400 hover:text-gray-500">{link}</a>
                ))}
              </div>

              <div className='flex items-center justify-between text-gray-400 text-sm '>
                  <p>2022, Movix All rights reserves</p>
                  <h1 className=' text-2xl font-krona text-orange-600'>Movix</h1>
              </div>
          </div>
      </footer>
  )
}

export default Footer