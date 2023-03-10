import React, { useEffect, useState } from "react";

import TokenFunc from '../utils/TokenFunc'
import getRandomNumber from "../lib/getRandomNumber";
import chooseWinner from "../lib/chooseWinner";

import "../styles/GameBoard.css";

const GameBoard = ({ userPick, addScore, setIsPlaying }) => {
  const [isThinking, setIsThinking] = useState(true);
  const [housePick, setHousePick] = useState("");
  const [winner, setWinner] = useState("");
  const [displayWinner, setDisplayWinner] = useState(false);

  function chooseHousePick() {
    // returns a random nunmber between 1 and 3
    const randomPick = getRandomNumber(1, 4);

    switch (randomPick) {
      case 1: 
        return "rock";
      case 2: 
        return "paper";
      case 3:
        return "scissors";
      default:
        break;
    }
  }

  useEffect(() => {
      let pick = chooseHousePick();

      setHousePick(pick);
      setIsThinking(false);

      // win / lose / draw
      const result = chooseWinner(userPick, pick);
      setWinner(result);

      addScore(result);
      debugger;
      setTimeout(()=>{
        setIsPlaying(false);
      }, 2000);
      setTimeout(()=>{
        setDisplayWinner(true);
        setTimeout(()=>{setDisplayWinner(false)},1000);
      }, 1000);
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="GameBoard">

      {displayWinner ? (
        <div className="play-again">
          {winner !== "draw" && (
            <>{winner === "win" ? <h1>¡GANASTE!</h1> : <h1>¡PERDISTE!</h1>}</>
          )}

          {winner === "draw" && <h1>Es un empate.</h1>}
          
        </div>
      ) : 
      
      <section className="resolution-area">

        <div className="user-pick">
          <h2 className="pick-title">ESCOGISTE</h2>

          {isThinking ? (
            <div className="user-pick-option">
              <TokenFunc tokenOption={userPick} />
            </div>
          ) : (
            <div className={winner + " user-pick-option"}>
              <TokenFunc tokenOption={userPick} />
            </div>
          )}
        </div>

        <div className="vlgb"></div>

        <div className="house-pick">
          <h2 className="pick-title">LA PC ESCOGIÓ</h2>
          {!isThinking && (
            <div className="user-pick">
              {!(winner === "draw") ? (
                <div
                  className={`${
                    winner === "win" ? "lose" : "win"
                  } user-pick-option`}
                >
                  <TokenFunc tokenOption={housePick} />
                </div>
              ) : (
                <div className="draw user-pick-option">
                  <TokenFunc tokenOption={housePick} />
                </div>
              )}
            </div>
          )}
        </div>

      </section>    

      }

    </div>
  );
};

export default GameBoard;
