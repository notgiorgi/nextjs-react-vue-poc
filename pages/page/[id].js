import React from 'react'
import { useRouter } from 'next/router'

import ComponentTreeRenderer from '../../components/ComponentTreeRenderer'
import pages from '../../data/pages.json'

const PageById = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null
  return <ComponentTreeRenderer isRoot componentTree={pages.find(page => page.id === id).root} />
}

export default PageById
