import React from 'react'
import { useProduct } from './ProductBox/context'

const ProductPrice = ({ id, style }) => {
  const { price } = useProduct()

  return (
    <p id={id} style={{ ...defaultStyle, ...style }}>
      {price.amount}
      {price.currency}
    </p>
  )
}

const defaultStyle = {}

export default ProductPrice
