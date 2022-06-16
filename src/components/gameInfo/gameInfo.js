// import axios from "axios"
import React, { useState } from "react";

export default function Games() {
    const apiURL = ("https://free-to-play-games-database.p.rapidapi.com/api/games");
    const [gameData, setgameData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '321e4cf4f3msh27f4e92b557ee24p10e6adjsn3452d4abb43c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    //////////////////////////////////////////////////////////////////////////////////

    // logs data
    fetch(apiURL, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




    return (
        <div>
            <h1>whatever</h1>
        </div>
    )
}

