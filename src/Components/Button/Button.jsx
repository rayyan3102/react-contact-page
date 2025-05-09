import React from 'react'
import styles from "./Button.module.css"


const Button = (props) => {


  return (
    <div className={props.isOutline ? styles.outline_btn : styles.Btn1}>
      <button>
      {props.icon}
      {props.text}
      </button>
    </div>
  )
}

export default Button
