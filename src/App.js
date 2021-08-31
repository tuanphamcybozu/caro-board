import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Components/Game';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

const App = () => {
  return (
      <>
        <h1>Game</h1>
        <Game />
      </>
  )
}

export default App;