import React, { useState } from "react";

const GameSizer = props => {
  const [size, setSize] = useState(3);

  const startGame = () => {
    props.onStartGame();
  };

  const sizeChangeHandler = event => {
    setSize(event.target.value);
  };

  return (
    <div>
      <input
        type="numeric"
        placeholder="size (e.g. 3 for 3x3, 5 for 5x5)"
        value={size}
        onChange={sizeChangeHandler}
      />
      <button onClick={startGame}>Start game</button>
    </div>
  );
};

export default GameSizer;
