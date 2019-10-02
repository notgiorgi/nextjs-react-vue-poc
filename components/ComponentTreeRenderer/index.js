import React from 'react'

import ElementRenderer from './ElementRenderer'
import CustomComponentRenderer from './CustomComponentRenderer'

const ComponentTreeRenderer = ({ isRoot, componentTree }) => {
  const tree = (
    <>
      {componentTree.map(component => {
        if (component.type === 'Custom')
          return (
            <CustomComponentRenderer
              key={component.id}
              customComponentId={component.customComponentId}
              customComponentInstanceId={component.id}
              data={component.props}
              renderSubtree={renderSubtree}
              dropzones={component.dropzones}
            />
          )

        return (
          <ElementRenderer key={component.id} element={component} renderSubtree={renderSubtree} />
        )
      })}
    </>
  )

  if (isRoot) return <div>{tree}</div>
  return tree
}

function renderSubtree(tree) {
  return <ComponentTreeRenderer isRoot={false} componentTree={tree} />
}

export default ComponentTreeRenderer
