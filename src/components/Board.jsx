import React from "react";

import Token from "./Token"

import "../static/styles/Board.css";

const Board = ({ setUserPick, setIsPlaying }) => {
  function handleClick(option) {
    setUserPick(option);
    setIsPlaying(true);
  }

  return (
    <main className="Board">

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
