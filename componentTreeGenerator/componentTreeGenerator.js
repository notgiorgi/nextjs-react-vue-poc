const faker = require('faker')

const { createId, getRandomInt } = require('./helpers')
const { elementTypes } = require('./data')

function createPage({ maxDepth, maxSiblings }) {
  const title = faker.commerce.productName()

  return {
    id: createId(),
    title,
    url: '/' + faker.helpers.slugify(title),
    products: [],
    root: createComponentTree(maxDepth, maxSiblings),
  }
}
module.exports.createPage = createPage

function createComponentTree(maxDepth, maxSiblings) {
  return Array.apply(null, { length: maxSiblings }).map(() => {
    const { type, getDefaultProps, canHaveChildren } = elementTypes[
      getRandomInt(0, elementTypes.length)
    ]

    return createElement({
      type,
      props: getDefaultProps(),
      children:
        canHaveChildren && maxDepth > 0 ? createComponentTree(maxDepth - 1, maxSiblings) : [],
    })
  })
}

function createElement(elementConfig) {
  return {
    id: createId(),
    ...elementConfig,
  }
}
