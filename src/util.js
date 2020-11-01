const tap = require("lodash/tap")

const log = (value) => tap(value, console.log)

const peek = (array) => array[0]
const pop = (array) => array.shift()

module.exports = {
  log,
  peek,
  pop,
  tap,
}
