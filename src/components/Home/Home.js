import { useState, useEffect } from "react";

export default function Home() {
  const [game, setGame] = useState([]);

  const gameSearch = {
    key: process.env.REACT_APP_API_KEY,
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    api: "?rapidapi-key=",
  };
  useEffect(() => {
    //async function and useEffect to convert original api to proper json format // proper array
    const getGame = async () => {
      const apiURL = `${gameSearch.url}${gameSearch.api}${gameSearch.key}`;
      try {
        // fetch data from link
        const res = await fetch(apiURL);
        // converting json response into a variable // The 'game' variable
        const game = await res.json();
        console.log(game);
        //dotting into the first object
        const objectData = Object.values(game);
        // adding object values into objectData variable
        setGame(objectData);
        console.log(objectData);
      } catch (err) {
        console.error(err);
      }
    };
    getGame();
  }, []);

  return game.length > 0 ? (
    <section className="container">
      {game.length &&
        game.map((game) => {
          return (
            <div className="layout">
              <a href={game.game_url} >
                <img
                  className="gamePic"
                  src={game.thumbnail}>
                </img>
                <p>{game.platform}</p>
                <h1>{game.title}</h1>
              </a>
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
            </div>

          );
        })}
    </section>
  ) : (
    <h1>loading...</h1>
  );
}
