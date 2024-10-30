import React from 'react'

function Input(props) {
  return (
    <input
    style={props.style}
    type={props.type}
    onChange={props.handleOnClick}
    {...props}
    >
        {props.text}
    </input>
  )
}

export default Input
