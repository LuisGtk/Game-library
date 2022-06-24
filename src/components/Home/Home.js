import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
    const [game, setGame] = useState([]);

    useEffect(() => {
        //async function and useEffect to convert original api to proper json format // proper array
        const getGame = async () => {
            const apiURL = "https://www.freetogame.com/api/games"
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
                            </div>
                        </Link>
                    );

                })}
            {/* <Routes>

                <Route path='/GameInfo' element={<GameInfo />} />

            </Routes> */}
        </section>

    ) : (
        <h1>loading...</h1>
    );
}