import { useContext, createContext } from 'react'

const ProductContext = createContext({})

export const Provider = ProductContext.Provider

export const useProduct = () => {
  return useContext(ProductContext)
}
