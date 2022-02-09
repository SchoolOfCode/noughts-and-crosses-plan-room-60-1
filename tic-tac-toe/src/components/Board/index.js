import React from "react";
import css from "./board.module.css";
import Square from "../Square";

const Board = ({ board, makeAmove }) => {

 return( <div className={css.grid}>{board.map((item, index)=>

<Square key={index} value={item} makeAmove={makeAmove}/>
   )}
</div> )};
 
export default Board;
