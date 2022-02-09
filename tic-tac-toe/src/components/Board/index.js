import React from "react";
import css from "./board.module.css";
import { useState } from "react";

const Board = () => {
  const [gameboardArray, setGameBoardArry] = useState(["", "", "", "", "", "", "", "", ""]);


const [ playerMove ,SetPlayerMove] =useState("")








  return (
    <div className={css.grid}>
      {gameboardArray.map((square) => {
        return <div value={square}className={css.square}>{square}</div>;
      })}
    </div>
  );
};

export default Board;
