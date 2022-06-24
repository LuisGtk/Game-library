import { useState, useEffect } from 'react';

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
                        <div className='container'> 
                        <h1>{game.title}</h1>
                        <p>{game.platform}</p>
                        <p>{game.release_date}</p>
                        {/* <img>{game.thumbnail}</img> */}
                        </div>
                    );
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}