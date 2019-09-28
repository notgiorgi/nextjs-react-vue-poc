import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

import ComponentTreeRenderer from '../../components/ComponentTreeRenderer'
import { PageContextProvider } from '../../contexts'
import pages from '../../data/pages.json'

const PageById = ({ page }) => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return (
    <PageContextProvider value={page}>
      <ComponentTreeRenderer isRoot componentTree={page.root} />
    </PageContextProvider>
  )
}

PageById.getInitialProps = async ({ query, req }) => {
  if (!req) {
    console.log('Request was run on client side')
  }

  const page = pages.find(page => page.id === query.id)

  const products = await Promise.all(
    page.products.map(productId => {
      return fetch(`http://localhost:1234?productId=${productId}`).then(res => res.json())
    }),
  )

  return { page: { ...page, products } }
}

export default PageById
