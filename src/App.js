import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

function App() {
  ///////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
        <Link className="homeBtn" to="/">
          <h1>React-Game Collection</h1>
        </Link>
        <div className="flex">
          <Link to="/Favorites">
            <button className="favs">
              Favorites
            </button>
          </Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </div>
  );
}
export default App;
