import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Data() {

    const [game, setGame] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const { data } = await axios.get("http://www.gamespot.com/api/games/?api_key=90e639df9ebfdb837daaf6c5cc836c3231412333")
        setGame(data)
    }

    return (
        <div className="library">

            {game.map(game => (

                <div key={game.name}>
                    <h1>{game.id}</h1>
                </div>
            ))}





        </div>
    )

}












// const Data = (props) => {
//     const [stateVariable, setStateVariable] = useState('');
//     return (
//         <div>
//             <h1>whatever</h1>
//         </div>
//     )
// }
