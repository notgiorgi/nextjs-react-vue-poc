const uuidv4 = require('uuid/v4')

const createId = () => {
  return 'shg-' + uuidv4()
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

module.exports.createId = createId
module.exports.getRandomInt = getRandomInt
