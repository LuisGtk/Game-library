import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Games from './components/gameInfo/gameInfo';

function App() {


///////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Game Collection</h1>
      <div className='flex'>
      <Link to='/'>
        <button className='gaming'>The Gaming Library</button>
      </Link>
      <Link to='/Games'>
        <button className='collection'>Games</button>
      </Link>
      </div>
      </header>

      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Games' element={<Games />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;