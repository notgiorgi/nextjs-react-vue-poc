import React from 'react'
import { useProduct } from './ProductBox/context'

const ProductTitle = ({ id, style, element }) => {
  const { title } = useProduct()

  const Component = element
  return (
    <Component id={id} style={{ ...defaultStyle, ...style }}>
      {title}
    </Component>
  )
}

const defaultStyle = {}

export default ProductTitle
