import { useState } from "react";
import Modal from "react-modal";

import Header from "./components/Header";
import Board from "./components/Board";
import GameBoard from "./components/GameBoard";

import "./App.css";
import rulesImage from "./static/images/image-rules.svg";

Modal.setAppElement("#root");

function App() {
  const [userPick, setUserPick] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  function addScore(winner) {
    if (winner === "win") {
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      <Header score={score} />
      {isPlaying ? (
        <GameBoard
          setIsPlaying={setIsPlaying}
          addScore={addScore}
          userPick={userPick}
        />
      ) : (
        <Board setUserPick={setUserPick} setIsPlaying={setIsPlaying} />
      )}

      <Modal isOpen={modalIsOpen} contentLabel="Example Modal">
        <div className="modal-header">
          <h1>Reglas</h1>
          <div className="modal-close" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="modal-content">
          <img src={rulesImage} alt="Reglas de juego" />
        </div>
      </Modal>

      <button className="rules-button" onClick={() => setIsOpen(true)}>
        REGLAS
      </button>

      <div className="credits">
        <p>
          Creado por{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/LuisEncastin">
            Luis Encastin
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
