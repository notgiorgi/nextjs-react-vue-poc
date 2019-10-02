import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import Vue from 'vue'

import CustomComponentDropzoneIdManager from './CustomComponentDropzoneIdManager'
import * as CustomComponents from '../../../custom_components'

const CustomComponentRenderer = ({
  customComponentId,
  customComponentInstanceId,
  data,
  renderSubtree,
}) => {
  const [portals, setPortals] = useState([])

  useEffect(() => {
    const CustomComponent = CustomComponents[customComponentId]

    if (!CustomComponent) throw new Error(`No custom component ${customComponentId} found`)

    const vm = new Vue({
      components: {
        CustomComponent,
      },
      render: function(h) {
        return h('CustomComponent', {
          props: {
            ...data,
            getDropzoneId: CustomComponentDropzoneIdManager.getDropzoneId,
            instanceId: customComponentInstanceId,
          },
        })
      },
      mounted() {
        const dropzoneIds = CustomComponentDropzoneIdManager.getDropzoneIds(
          customComponentInstanceId,
        )

        setPortals(
          Object.entries(dropzoneIds).map(([name, id]) => ({
            name,
            id,
            el: document.getElementById(id),
          })),
        )
      },
      beforeDestroy() {
        setPortals([])
      },
    })

    vm.$mount('#' + customComponentInstanceId)

    return () => {
      vm.$destroy()
    }
  }, [])

  return (
    <div>
      <div id={customComponentInstanceId}></div>
      {data.dropzones &&
        portals.map(({ id, el, name }) => {
          return createPortal(renderSubtree(data.dropzones[name]), el, id)
        })}
    </div>
  )
}

CustomComponentRenderer.propTypes = {
  customComponentId: PropTypes.string.isRequired,
  customComponentInstanceId: PropTypes.string.isRequired,
  data: PropTypes.object,
}

export default CustomComponentRenderer
