export default function Home() {
    /////////////////////////////////////////////
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '321e4cf4f3msh27f4e92b557ee24p10e6adjsn3452d4abb43c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (

        <h2>Recent Releases</h2>
    )
}