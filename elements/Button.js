import React from 'react'

const Button = ({ id, style, text }) => {
  return (
    <button id={id} style={{ ...defaultStyle, ...style }}>
      {text}
    </button>
  )
}

const defaultStyle = {}

export default Button
