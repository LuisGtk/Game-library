import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search/Search';
import Home from './components/Home/Home';
// import GameInfo from './components/GameInfo/GameInfo';
import Favorites from './components/Favorites/Favorites';

function App() {

  ///////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        <Link className='homeBtn' to='/'>
          <h1>React-Game Collection</h1>
        </Link>
        <div className='flex'>
          <Link to='/Favorites'>
            <button className='collection'>Favorites</button>
          </Link>
        </div>
      </header>
      <Search />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/GameInfo' element={<GameInfo />} /> */}
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;