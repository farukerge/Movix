import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trending from '.../Pages/Trending'

function NavLinks() {
  return (
    <div>
        <Router>
        
        
        
        <Routes>
            <Route path='/' element = {<Trending />} />
            {/* <Route path='/destination' element = {} />
            <Route path='/crew' element = {} />
            <Route path='/technology' element = {} /> */}
        </Routes>
        
      </Router>
    </div>
  )
}

export default NavLinks
