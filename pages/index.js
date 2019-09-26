import React from 'react'
import Link from 'next/link'

import pages from '../data/pages.json'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <ul>
      {pages.map(page => (
        <li key={page.id}>
          <Link href="/page/[id]" as={`page/${page.id}`}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Index
