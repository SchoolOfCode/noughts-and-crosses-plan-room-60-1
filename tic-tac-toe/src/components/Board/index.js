import React from "react";
import css from "./board.module.css";

const Board = () => {
  const gameboardArray = ["", "", "", "", "", "", "", "", ""];

  return (
    <div className={css.grid}>
      {gameboardArray.map((square) => {
        return <div value={square}className={css.square}></div>;
      })}
    </div>
  );
};

export default Board;
