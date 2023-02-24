import React from "react";

import Token from "./Token"

import "../styles/PlayerButtons.css";

const Board = ({ setUserPick, setIsPlaying, user }) => {
  function handleClick(option) {
    setUserPick(option);
    setIsPlaying(true);
  }

  return (
    <main className="Board">

      {
      user === 'player' ?
      <div>
      <h2>Tu</h2>
      <p>Selecciona una opción</p>        
      </div> :
      <h2>Computadora</h2>            
      }




      <Token handleClick={handleClick} token="paper"/>

      <span className="line line1"></span>

      <Token handleClick={handleClick} token="scissors"/>

      <span className="line line2"></span>

      <Token handleClick={handleClick} token="rock"/>

      <span className="line line3"></span>
    </main>
  );
};

export default Board;
