import React from 'react'
import PropTypes from 'prop-types'

import * as Elements from '../../elements'

const ElementRenderer = ({ element: { id, type, props, children }, renderSubtree }) => {
  const Component = Elements[type]
  if (!Component) throw new Error(`No element ${type} found`)

  return (
    <Component id={id} {...props} renderSubtree={renderSubtree}>
      {children}
    </Component>
  )
}

ElementRenderer.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    props: PropTypes.object,
    children: PropTypes.array,
  }).isRequired,
}

export default ElementRenderer
