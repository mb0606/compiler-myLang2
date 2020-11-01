describe(parse, () => {
  it.skip("should return a token with the type of NumericLiteral for number tokens", () => {
    const tokens = [{ type: "Number", value: 2 }]

    const ast = { type: "NumericLiteral", value: 2 }

    expect(parse(tokens)).toEqual(ast)
  })
})
