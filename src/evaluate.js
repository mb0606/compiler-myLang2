const { environment } = require("./std-lib")
const last = (collection) => collection[collection.length - 1]

const apply = (node) => {
  const func = environment[node.name]
  const args = node.arguments.map(evaluate)
  if (typeof func !== "function") {
    throw new TypeError(`${node.name} is not a function`)
  }
  console.log("node name: ", node.name, args)
  return func(...args)
}

const getIdentifier = (node) => {
  if (environment[node.name]) return environment[node.name]
  throw new ReferenceError(`${node.name} is not defined`)
}
const evaluate = (node) => {
  if (node.type === "CallExpression") {
    return apply(node)
  }
  if (node.type === "Identifier") {
    return getIdentifier(node)
  }
  if (node.value === "Number") {
    return node.value
  }
}

module.exports = { evaluate }
