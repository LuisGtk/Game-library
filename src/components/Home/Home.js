import {useState,useEffect} from 'react';

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
            } catch (err) {
                console.error(err)
            }
        };
        getGame();
    }, [])

        return (
        <h2>Recent Releases</h2>
    )
}