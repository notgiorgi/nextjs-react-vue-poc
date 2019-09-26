import React from 'react'

const Heading = ({ id, style, element, text }) => {
  const Component = element
  return (
    <Component id={id} style={{ ...defaultStyle, ...style }}>
      {text}
    </Component>
  )
}

const defaultStyle = {}

export default Heading
