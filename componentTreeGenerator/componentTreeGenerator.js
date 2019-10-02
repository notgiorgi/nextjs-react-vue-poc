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
    const { type, getDefaultProps, canHaveChildren, customComponentTypes } = elementTypes[
      getRandomInt(0, elementTypes.length)
    ]

    if (type === 'Custom') {
      const { customComponentId, getDefaultProps } = customComponentTypes[
        getRandomInt(0, customComponentTypes.length)
      ]
      return createCustomComponent({
        customComponentId,
        props: getDefaultProps({ createComponentTree }),
      })
    }

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

function createCustomComponent(elementConfig) {
  return {
    id: createId(),
    type: 'Custom',
    ...elementConfig,
  }
}
