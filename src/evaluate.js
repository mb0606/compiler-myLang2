const { environment } = require("./std-lib")
const last = (collection) => collection[collection.length - 1]

const apply = (node) => {
  const func = environment[node.name]
  const args = node.arguments.map(evaluate)
  if (typeof func !== "function") {
    throw new TypeError(`${node.name} is not a function`)
  }
  return func(...args)
}
const evaluate = (node) => {
  if (node.type === "CallExpression") {
    return apply(node)
  }
  if (node.value) {
    return node.value
  }
}

module.exports = { evaluate }
