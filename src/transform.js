const { traverse } = require("./traverse")
// const { specialForms } = require("./special-forms")

const transform = (node) => {
  traverse(node, {
    CallExpression: {
      enter({ node }) {
        if (specialForms[node.name]) {
          specialForms[node.name](node)
        }
      },
    },
  })
  return node
}

// CallExpression
//    - name
//    - argements (assignee = indentifier, value =  assignment)

// VariableDeclaration
//     - identifier
//     - assignment

const specialForms = {
  def(node) {
    const [identifier, assignment] = node.arguments
    node.type = "VariableDeclaration"
    node.identifier = identifier
    node.assignment = assignment
    delete node.name
    delete node.arguments
    console.log("node: ", node)
  },
}

module.exports = { specialForms, transform }
