const { convertJavaScript } = require("../src/convert-javascript")

describe(convertJavaScript, () => {
  it("should reformate Dropbear to valid JavaScript", () => {
    const ast = {
      type: "CallExpression",
      name: "add",
      arguments: [
        { type: "NumericLiteral", value: 2 },
        { type: "NumericLiteral", value: 3 },
        {
          type: "CallExpression",
          name: "subtract",
          arguments: [
            { type: "NumericLiteral", value: 5 },
            { type: "NumericLiteral", value: 4 },
          ],
        },
      ],
    }

    expect(convertJavaScript(ast)).toBe("add(2, 3, subtract(5, 4))")
  })
})
