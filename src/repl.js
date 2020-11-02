const { prompt } = require("inquirer")
const chalk = require("chalk") // https://www.npmjs.com/package/chalk
const { parseAndEvaluate } = require("./parse-and-evaluate")

const ask = () => {
  const questions = [
    { name: "COMMAND", type: "input", message: chalk.green(">") },
  ]
  return prompt(questions)
}

const repl = async () => {
  try {
    const answers = await ask()
    const { COMMAND } = answers
    if (COMMAND.trim()) {
      console.log(chalk.yellow(parseAndEvaluate(COMMAND)))
    }
  } catch (error) {
    console.error(error)
  }
  repl()
}

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.blue("MarcoBcodes")} Programming Language`
    )
  )
  repl()
}

module.exports = repl
