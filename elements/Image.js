import React from 'react'

const Image = ({ id, style, src, alt }) => {
  return <img id={id} style={{ ...defaultStyle, ...style }} src={src} alt={alt} />
}

const defaultStyle = {
  width: '100%',
  height: 'auto',
}

export default Image
