import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/Hooks/ScrollToTops';


import Exclusive from './Pages/Exclusive';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Upcoming from './Pages/Upcoming';
import Watchlist from './Pages/Watchlist';





function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header/>
    
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/exclusive' element={<Exclusive />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>

        <Footer />

      </Router>
      
    </>
  );
}

export default App;
