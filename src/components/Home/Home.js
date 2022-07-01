import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';


import './Home.css';

export default function Home() {
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
    //////////////////////////////////////////////////
    return game.length > 0 ? (
        <section className='container'>
            {game.length &&
                // <Search />
                game.map((game) => {
                    return (
                        <div className='layout'>
                            <img className='gamePic' alt="dataImg" src={game.thumbnail}></img>
                            <h1>{game.title}</h1>
                            <p>{game.platform}</p>
                            <label>
                                <p>{game.description}</p>
                                <a className='cards' href={game.game_url}>
                                    Click me
                                </a>
                            </label>
                        </div>
                    );
                })}
        </section>


    ) : (
        <h1>loading...</h1>
    );
}
