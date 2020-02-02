import React, { useState } from "react";
import Game from "./Containers/Game";
import GameSizer from "./Components/GameSizer";
import "./App.css";

function App() {
  const [game, setGame] = useState({ isRun: false });

  const startGameHandler = () => {
    setGame({ isRun: true });
  };

  const entry = game.isRun ? (
    <Game />
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
