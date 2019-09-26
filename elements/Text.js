import React from 'react'

const Text = ({ id, style, element, text }) => {
  const Component = element
  return (
    <Component id={id} style={{ ...defaultStyle, ...style }}>
      {text}
    </Component>
  )
}

const defaultStyle = {}

export default Text
