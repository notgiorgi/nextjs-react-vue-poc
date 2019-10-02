const faker = require('faker')
const { getRandomInt } = require('./helpers')

module.exports.elementTypes = [
  {
    type: 'Button',
    canHaveChildren: false,
    getDefaultProps: () => ({
      text: faker.lorem.word(),
      style: {
        backgroundColor: 'skyblue',
        color: 'white',
        height: '48px',
        padding: '16px',
        cursor: 'pointer',
      },
    }),
  },
  {
    type: 'Heading',
    canHaveChildren: false,
    getDefaultProps: () => ({
      element: 'h2',
      text: faker.lorem.words(getRandomInt(1, 4)),
      style: {
        height: '48px',
        padding: '16px',
        border: '1px solid salmon',
      },
    }),
  },
  {
    type: 'Image',
    canHaveChildren: false,
    getDefaultProps: () => ({
      src: 'https://source.unsplash.com/random/200x100?cache=' + getRandomInt(0, 1200),
      alt: faker.commerce.productName(),
    }),
  },
  { type: 'Section', canHaveChildren: true, getDefaultProps: () => ({}) },
  {
    type: 'Text',
    canHaveChildren: false,
    getDefaultProps: () => ({
      element: 'span',
      text: faker.lorem.paragraph(),
      style: {
        fontFamily: 'comic-sans',
        fontSize: '24px',
        color: 'papayawhip',
        backgroundColor: 'dimgray',
      },
    }),
  },
  // { type: 'ProductBox', canHaveChildren: true },
  // { type: 'ProductPrice', canHaveChildren: false },
  // { type: 'ProductTitle', canHaveChildren: false },
  {
    type: 'Custom',
    canHaveChildren: false,
    customComponentTypes: [
      { customComponentId: 'WeirdTable', getDefaultProps: () => ({}) },
      { customComponentId: 'Counter', getDefaultProps: () => ({ initialCount: 30 }) },
      {
        customComponentId: 'WithDropzones',
        getDefaultProps: ({ createComponentTree }) => ({
          dropzones: {
            first: createComponentTree(1, 3),
            second: createComponentTree(1, 3),
          },
        }),
      },
    ],
  },
]
