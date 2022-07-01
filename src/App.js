import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search/Search';

// import Home from './components/Home/Home';

import Favorites from './components/Favorites/Favorites';

function App() {
  const [game, setGame] = useState([]);
  const gameSearch = {
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    api: "?rapidapi-key=",
    key: process.env.REACT_APP_API_KEY,
  };

  useEffect(() => {
    //async function and useEffect to convert original api to proper json format // proper array
    const getGame = async () => {
      const apiURL = `${gameSearch.url}${gameSearch.api}${gameSearch.key}`;
      try {
        // fetch data from link
        const res = await fetch(apiURL);
        // converting json response into a variable
        const game = await res.json();
        // console.log(game)
        //dotting into the first object
        const objectData = Object.values(game);
        // adding object values  into objectData variable
        setGame(objectData);
        console.log(objectData);
      } catch (err) {
        console.error(err)
      }
    };
    getGame();
  }, [])
  ///////////////////////////////////////////////////////////////

  return game.length > 0 ? (
    <section className='container'>
      <div>
        <header className="App-header">
          <Link className='homeBtn' to='/'>
            <h1>React-Game Collection</h1>
          </Link>
        <div className='search'>
          < Search />
        </div>
        </header>
      </div>
      {game.length &&
        // <Search />
        game.map((game) => {
          return (
            <div className='layout'>
              <div className=' header'>
              </div>
              <a className='cards' href={game.game_url}>
                <img className='gamePic' alt="dataImg" src={game.thumbnail}></img>
                <h1>{game.title}</h1>
              </a>
              <p>{game.platform}</p>
              <label>
                <p>{game.short_description}</p>
              </label>
            </div>
          );
        })}
    </section>


  ) : (
    <h1>loading...</h1>
  );





























  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Link className='homeBtn' to='/'>
  //         <h1>React-Game Collection</h1>
  //       </Link>
  //     </header>
  //     <Search />
  //     <main>
  //       <Routes>
  //         <Route path='/' element={<Home />} />
  //         {/* <Route path='/GameInfo' element={<GameInfo />} /> */}
  //         <Route path='/Favorites' element={<Favorites />} />
  //       </Routes>
  //     </main>
  //   </div>
  // );
}
export default App;