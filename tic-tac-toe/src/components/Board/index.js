import React from "react";
import css from "./board.module.css";

const Board = () => {
  const gameboardArray = ["", "", "", "", "", "", "", "", ""];

  return (
    <div>
      {gameboardArray.map((square) => {
        return <div className={css.square}>square</div>;
      })}
    </div>
  );
};

export default Board;
