const generate = require("@babel/generator").default
const { traverse } = require("./traverse")

const babelVisitor = {
  CallExpression: {
    enter({ node }) {
      node.callee = { type: "Identifier", name: node.name }
    },
  },
}

const convertJavaScript = (ast) => {
  // https://astexplorer.net/
  // https://babeljs.io/docs/en/babel-generator
  traverse(ast, babelVisitor)
  return generate(ast).code
}

module.exports = {
  convertJavaScript,
}
