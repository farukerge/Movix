import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks() {
    
const links = [
    
    {
        path: '/exclusive',
        name: 'Exclusive',
    },
    {
        path: '/trending',
        name: 'Trending',
    },
    {
        path: '/upcoming',
        name: 'Upcoming',
    },
    {
        path: '/watchlist',
        name: 'Watchlist',
    },
];


  return (
     <>
            {links.map((link, index) => (
                <Link className="lowercase text-sm mr-8" to={link.path} key={`${link.name}-${index}`}>
                    {link.name}
                </Link>
            ))}
        </>
  )
}

export default NavLinks