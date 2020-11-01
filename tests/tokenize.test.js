import { inRange } from "lodash"
import { tokenize } from "../src/tokenize"

describe(tokenize, () => {
  it("should return an array", () => {
    expect(Array.isArray(tokenize(""))).toBe(true)
  })

  it("should be able to tokenize a pair of parentheses", () => {
    const input = "()"
    const result = [
      { type: "Parenthesis", value: "(" },
      { type: "Parenthesis", value: ")" },
    ]

    expect(tokenize(input)).toEqual(result)
  })
  it("should ignore whitespaces", () => {
    const input = "                  "
    const result = []

    expect(tokenize(input)).toEqual(result)
  })
  it("should correctly tokenize a single digit", () => {
    const input = "2"
    const result = [{ type: "Number", value: 2 }]

    expect(tokenize(input)).toEqual(result)
  })

  it("should correctly tokenize a single letter", () => {
    const input = "a"
    const result = [{ type: "Name", value: "a" }]

    expect(tokenize(input)).toEqual(result)
  })

  it("should be able to handle single numbers in expressions", () => {
    const input = "(1 2)"

    const result = [
      { type: "Parenthesis", value: "(" },
      { type: "Number", value: 1 },
      { type: "Number", value: 2 },
      { type: "Parenthesis", value: ")" },
    ]

    expect(tokenize(input)).toEqual(result)
  })
})
