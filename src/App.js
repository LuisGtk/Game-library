import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Games from './components/gameInfo/gameInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>The Gaming Library</h1>
        </Link>
      </header>

      <Link to='/Games'>
        <h1>Games</h1>
      </Link>







      <main>
        <Routes>
          <Route path='/Games' element={<Games />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;