// import axios from "axios"
import React, { useState } from "react";

export default function Games() {

    const [gameData, setgameData] = useState();
    const apiURL = ("https://www.freetogame.com/api/games");
    //////////////////////////////////////////////////////////////////////////////////

    // // logs data
    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });


    return (
        <div>
            <h1>whatever</h1>
            <p>{gameData}</p>
        </div>
    )
}

