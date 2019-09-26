import React from 'react'

const Section = ({ id, style, children, renderSubtree }) => {
  return (
    <div id={id} style={{ ...defaultStyle, ...style }}>
      {children && children.length > 0 && renderSubtree(children)}
    </div>
  )
}

const defaultStyle = {}

export default Section
