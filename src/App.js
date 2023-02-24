import { useState } from "react";

import Header from "./components/Header";
import Score from "./components/Score";
import Board from "./components/Board";

import "./App.css";

function App() {
  const [userPick, setUserPick] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);

  function addScore(winner) {
    if (winner === "win") {
      setScore(score + 1);
    } else if (winner === "lose" && winner !== "draw") { 
      setPcScore(pcScore + 1)
    }
  }

  return (
    <div className="App">
      <Header/>
      <Score score={score} pcScore={pcScore}/>

      <Board
      isPlaying={isPlaying}
      setUserPick={setUserPick}
      setIsPlaying={setIsPlaying}
      addScore={addScore}
      userPick={userPick}
      />

      <footer className="footer">
        <div className="credits">
          <p>
            Creado por{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/LuisEncastin">
              Luis Encastin
            </a>
            .
          </p>
        </div>      
      </footer>    

    </div>
  );
}

export default App;
