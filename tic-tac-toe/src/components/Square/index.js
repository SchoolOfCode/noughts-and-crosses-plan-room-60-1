import React from 'react'
import css from "./Square.module.css"

const Square = ({index, value , makeAmove}) => {
    return (
        <div key={index} value ={value} className={css.square}  onClick={makeAmove}>
           {value} 
        </div>
    )
}

export default Square
