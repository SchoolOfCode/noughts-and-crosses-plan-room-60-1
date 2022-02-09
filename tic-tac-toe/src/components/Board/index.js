import React from "react";
import css from "./board.module.css";
import { useState } from "react";
import Square from "../Square";


const Board = () => {
  const [gameboardArray, setGameBoardArry] = useState(["", "", "", "", "", "", "", "", ""]);


const [ playerMove ,SetPlayerMove] =useState("")








  return (
    <div className={css.grid}>
      {gameboardArray.map((square) => {
        return <Square value={square}/>
      })}
    </div>
  );
};

export default Board;
