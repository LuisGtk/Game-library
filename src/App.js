import React, {useState, useEffect} from 'react';
import { Routes , Route, Link } from 'react-router-dom';
import './App.css';
// import Gamelist from './components/gameList/gameList';
import Games from './components/gameInfo/gameInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Gaming Library</h1>
      </header>

      <Link to ='/Games'>
        <h1>Games</h1>
        </Link>










      <main>
  <Routes>
  <Route path='/Games' element={<Games/>} />
  </Routes>
</main>

    </div>
  );
}
export default App;