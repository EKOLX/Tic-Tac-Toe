import React, { useState } from "react";
import Game from "./Containers/Game";
import GameSizer from "./Components/GameSizer";
import "./App.css";

function App() {
  const [game, setGame] = useState({ isRun: false, size: 5 });

  const startGameHandler = size => {
    setGame({ isRun: true, size });
  };

  const resetGameHandler = () => {
    setGame({ isRun: false });
  };

  const entry = game.isRun ? (
    <Game size={game.size} onReset={resetGameHandler} />
  ) : (
    <GameSizer onStartGame={startGameHandler} />
  );

  return (
    <div className="TicTacToeApp">
      <header>Play tic tac toe with your friend!</header>
      {entry}
    </div>
  );
}

export default App;
