const {
  isLetter,
  isWhiteSpace,
  isNumber,
  isParenthesis,
  isQuote,
} = require("./indentify")

export const tokenize = (input) => {
  const tokens = []
  let cursor = 0

  while (cursor < input.length) {
    const character = input[cursor]
    if (isParenthesis(character)) {
      tokens.push({
        type: "Parenthesis",
        value: character,
      })
      cursor++
      continue
    }
  }

  return tokens
}