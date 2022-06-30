import './Search.css';
import { useState, useEffect } from 'react';

export default function Search() {
    const [search, setSearch] = useState([]);

    return (
        < div className='search' >
            <input className="search" type="text" placeholder="Search..."></input>
        </div >

    )
}