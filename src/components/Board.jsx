import React from "react";

import PlayerButtons from "./PlayerButtons"
import GameBoard from "./GameBoard";

import "../styles/Board.css";

const Board = ({isPlaying, setUserPick, setIsPlaying, addScore, userPick}) => {

  return (
    <div className="board">
        <PlayerButtons
        setUserPick={setUserPick}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        user={'player'}
        />
        {isPlaying ? (
            <GameBoard
            setIsPlaying={setIsPlaying}
            addScore={addScore}
            userPick={userPick}
            /> 
        ) :
        <div className="vl"></div>
        }
        <PlayerButtons
        setUserPick={setUserPick}
        setIsPlaying={setIsPlaying}
        user={'pc'}
        />        
    </div>
  );
};

export default Board;