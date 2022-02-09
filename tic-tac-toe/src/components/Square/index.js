import React from 'react'
import css from "./Square.module.css"

const Square = ({value , makeAmove}) => {
    return (
        <div  value ={value} className={css.square}  onClick={makeAmove}>
           {value} 
        </div>
    )
}

export default Square
