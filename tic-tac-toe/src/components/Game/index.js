import React from "react";
import css from "./game.module.css";
import { useState } from "react";

import Board from "../Board";

const Game = () => {
  const [gameboardArray, setGameBoardArry] = useState(Array(9).fill(null));

  const [playerMove, SetPlayerMove] = useState("X");

 
 function makeAMove(e){

let index = e.target.value

setGameBoardArry([...gameboardArray.slice(0, index),playerMove, ...gameboardArray.slice(index )])

console.log(index)


 }
 
 
 
 
 
 
 
 
 
  return (
    <Board makeAmove={makeAMove} board={gameboardArray} />
     

  );
};

export default Game;
