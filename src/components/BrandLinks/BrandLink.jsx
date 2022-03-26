import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home'

function BrandLink() {
  return (
      <div>
          <Link to="/"  className='text-2xl text-orange-600'>
              Movix
          </Link>
      </div>
  )
}

export default BrandLink