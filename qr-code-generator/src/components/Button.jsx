import React from 'react'
import {buttonStyle} from "../styles/Styles.jsx"

function Button(props) {
  return (
    <button style={buttonStyle} onClick={props.handleOnClick} {...props}>
      {`Generate`}
    </button>
  )
}

export default Button
