import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './components/HeaderText';
import { PokemonDataContext } from './PokemonDataContext';
import PokemonListView from './components/PokemonListView';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About'
import Help from './components/Help'
import GrassType from './components/GrassType';
import DisplayByType from './components/DisplayByType';


function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <Router>
    <PokemonDataContext.Provider value={pokemons}>
      <div className="pokedex-app">
      <nav className="headernav navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbar1">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/grasstype">Grass Type</Link>
        <Link className="nav-item" to="/firetype">Fire Type</Link>
        <Link className="nav-item" to="/watertype">Water Type</Link>
        <Link className="nav-item" to="/normaltype">Normal Type</Link>
        <Link className="nav-item" to="/poisontype">Poison Type</Link>
        <Link className="nav-item" to="/electrictype">Electric Type</Link>
        <Link className="nav-item" to="/groundtype">Ground Type</Link>
        <Link className="nav-item" to="/rocktype">Rock Type</Link>
        <Link className="nav-item" to="/fightingtype">Fighting Type</Link>
        <Link className="nav-item" to="/psychictype">Psychic Type</Link>
        <Link className="nav-item" to="/icetype">Ice Type</Link>
        <Link className="nav-item" to="/ghosttype">Ghost Type</Link>
        <Link className="nav-item" to="/dragontype">Dragon Type</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/help">Help</Link>
      </ul>
      </div>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<><HeaderText /><PokemonListView/></>} />
      <Route path="/grasstype" element={<GrassType />} />
      <Route path="/firetype" element={<DisplayByType displayType="fire" />} />
      <Route path="/watertype" element={<DisplayByType displayType="water" />} />
      <Route path="/bugtype" element={<DisplayByType displayType="bug" />} />
      <Route path="/normaltype" element={<DisplayByType displayType="normal" />} />
      <Route path="/poisontype" element={<DisplayByType displayType="poison" />} />
      <Route path="/electrictype" element={<DisplayByType displayType="electric" />} />
      <Route path="/groundtype" element={<DisplayByType displayType="ground" />} />
      <Route path="/rocktype" element={<DisplayByType displayType="rock" />} />
      <Route path="/fightingtype" element={<DisplayByType displayType="fighting" />} />
      <Route path="/psychictype" element={<DisplayByType displayType="psychic" />} />
      <Route path="/icetype" element={<DisplayByType displayType="ice" />} />
      <Route path="/ghosttype" element={<DisplayByType displayType="ghost" />} />
      <Route path="/dragontype" element={<DisplayByType displayType="dragon" />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      </Routes>
      </div>
    </PokemonDataContext.Provider>
    </Router>

  );
}

export default App;