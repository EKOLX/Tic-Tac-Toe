import React, { useState } from "react";

const GameSizer = props => {
  const [size, setSize] = useState("");

  const startGame = () => {
    if (!size) {
      alert("Please, specify the size of game.");
      return;
    } else if (size < 3) {
      alert("Game doesn't make sense if the size is less than 3.");
      setSize("");
      return;
    }

    props.onStartGame(size);
  };

  const sizeChangeHandler = event => {
    setSize(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="size (e.g. 3 for 3x3, 5 for 5x5) etc."
        style={{ width: "200px" }}
        value={size}
        onChange={sizeChangeHandler}
      />
      <button onClick={startGame}>Start game</button>
    </div>
  );
};

export default GameSizer;
