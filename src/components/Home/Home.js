import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
    const [game, setGame] = useState([]);
    const gameSearch = {
        key: process.env.REACT_APP_API_KEY,
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        api: "?rapidapi-key=",
        // sortBy:`?sort-by=alphabetical`,
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
                console.log(game)
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
    // const sortedCharacters = game.sort((a, b ) => (a + b))
    // console.log(sortedCharacters)
    return game.length > 0 ? (
        <section className='container'>
            {game.length &&
                game.map((game) => {
                    return (
                        <Link className='cards' to='/GameInfo'>
                            <div className='layout'>
                                <img className='gamePic' src={game.thumbnail}></img>
                                <h1>{game.title}</h1>
                                <p>{game.platform}</p>
                                <label>
                                    <p>{game.description}</p>
                                </label>
                            </div>
                        </Link>
                    );

                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}