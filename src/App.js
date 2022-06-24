import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import gameInfo from './components/gameInfo/gameInfo';
import Favorites from './components/Favorites/Favorites';

function App() {

  ///////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
<Link className='homeBtn' to = '/'>
        <h1>React-Game Collection</h1>
 </Link>
        <div className='flex'>
          <Link to='/Favorites'>
            <button className='collection'>Favorites</button>
          </Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gameInfo' element={<gameInfo />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;