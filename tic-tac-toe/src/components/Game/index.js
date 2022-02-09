import React from "react";
import css from "./game.module.css";
import { useState } from "react";
import Square from "../Square";
import Board from "../Board";

const Game = () => {
  const [gameboardArray, setGameBoardArry] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [playerMove, SetPlayerMove] = useState("");

  return (
    <Board>
      {gameboardArray.map((square) => {
        return <Square value={square} />;
      })}
    </Board>
  );
};

export default Game;
