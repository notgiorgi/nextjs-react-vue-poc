const fs = require('fs')
const path = require('path')

const { createPage } = require('./componentTreeGenerator')

async function main() {
  await fs.promises.writeFile(
    path.join(__dirname, './page.json'),
    JSON.stringify(createPage({ maxSiblings: 8, maxDepth: 11 }), null, 2),
  )
  console.log('written')
}

main()
