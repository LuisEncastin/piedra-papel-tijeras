import React from "react";

import "../styles/Score.css";

const Score = ({ score, pcScore }) => {
  return (
    <header className="score">
      <div className="headerScore">
        <div className="scoreCounter">
          <h2>{score}</h2> - <h2>{pcScore}</h2>          
        </div>
        <p>Marcador:</p>
      </div>
    </header>
  );
};

export default Score;
