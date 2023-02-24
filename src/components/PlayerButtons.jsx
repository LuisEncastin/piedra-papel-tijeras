import React from "react";

import Token from "./Token"

import "../styles/PlayerButtons.css";

const Board = ({ setUserPick, setIsPlaying, isPlaying, user }) => {
  function handleClick(option) {
    setUserPick(option);
    setIsPlaying(true);
  }

  return (
    <main className="playerButtons">

      {
      user === 'player' ?
      <div>
      <h2>Tú</h2>
      {!isPlaying ? <h3>Selecciona una opción</h3> : null }
      </div> :
      <h2>Computadora</h2>            
      }

      <Token handleClick={handleClick} className="token" token="paper"/>

      <Token handleClick={handleClick} className="token" token="scissors"/>

      <Token handleClick={handleClick} className="token" token="rock"/>

    </main>
  );
};

export default Board;
