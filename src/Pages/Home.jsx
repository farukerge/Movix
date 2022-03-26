import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Exclusive from './Exclusive'
import Trending from './Trending'
import Upcoming from './Upcoming'
import Watchlist from './Watchlist'

function Home() {
  return (
    <>
          <Exclusive />
          <Trending />
          <Upcoming />
          <Watchlist />
    </>
  )
}

export default Home