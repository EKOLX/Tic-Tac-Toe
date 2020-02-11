import React, { useState, useEffect } from "react";
import "./GameSizer.css";

const GameSizer = ({ onStartGame }) => {
  const [size, setSize] = useState({ value: "", touched: false });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!size.value && size.touched) {
      setMessage("Please, specify the size of game.");
    } else if (size.value < 3 && size.touched) {
      setMessage("Game doesn't make sense if the size is less than 3.");
      setSize("");
    } else if (size.value >= 3) {
      setMessage("");
    }
  }, [size]);

  const startGame = () => {
    onStartGame(size.value);
  };

  const sizeChangeHandler = event => {
    setSize({ value: event.target.value, touched: true });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="size (e.g. 3 for 3x3, 5 for 5x5) etc."
        style={{ width: "200px" }}
        value={size.value}
        onChange={sizeChangeHandler}
      />
      <button onClick={startGame} disabled={!size.value || size.value < 3}>
        Start game
      </button>
      {message ? <p>{message}</p> : ""}
    </div>
  );
};

export default GameSizer;
