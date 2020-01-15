import React from 'react';
import './App.css';
import Home from './Home';
import Games from './Games';
import Game from './Game';
import Contact from './Contact';
import Search from './Search'

function App() {
  return (
    <div >
        <Home></Home>
        <Contact></Contact>
        <Games></Games>
        <Game></Game>
        <Search></Search>
    </div>
  );
}

export default App;

