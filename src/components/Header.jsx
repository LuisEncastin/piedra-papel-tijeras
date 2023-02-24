import React from "react";

import "../static/styles/Header.css";

const Header = ({ score }) => {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>
          Piedra
          <br />
          Papel o
          <br />
          Tijeras
        </h1>
      </div>
      <div className="Header-score">
        <p>Puntuación:</p>
        <h2>{score}</h2>
      </div>
    </header>
  );
};

export default Header;
