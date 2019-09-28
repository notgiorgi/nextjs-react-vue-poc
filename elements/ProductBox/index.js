import React, { useMemo } from 'react'
import { usePage } from '../../contexts'
import { Provider } from './context'

const ProductBox = ({ id, productId, style, children, renderSubtree }) => {
  const { products } = usePage()

  const product = useMemo(() => {
    return products.find(product => product.id === productId)
  }, [productId])

  return (
    <Provider value={product}>
      <div id={id} style={{ ...defaultStyle, ...style }}>
        {children && children.length > 0 && renderSubtree(children)}
      </div>
    </Provider>
  )
}

const defaultStyle = {}

export default ProductBox
