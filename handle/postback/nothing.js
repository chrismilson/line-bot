const color = require('../../color')

module.exports = () => {
  color.revert()
  return Promise.resolve(null)
}
