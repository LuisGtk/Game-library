import './Search.css';
// import { useState, useEffect } from 'react';

export default function Search({ handleSubmit, handleChange, searchString }) {

    return (
        <form onSubmit={handleSubmit}>
            <div className='search' >
                <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                    onChange={handleChange}
                    value={searchString}
                >
                </input>
                <button className='searchBtn'type='submit'>Search</button>
            </div >
        </form>
    )
}
