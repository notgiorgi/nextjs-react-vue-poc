import { createContext, useContext } from 'react'

const PageContext = createContext({})

export const Provider = PageContext.Provider

export const usePage = () => {
  return useContext(PageContext)
}
