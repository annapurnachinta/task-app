// npm install chalk@2.4.1
// challenge: Use chalk library in your project

// 1. Install
// 2. load chalk in app.js
// 3. use it to print the string "Success!" to the console in green
// 4. test the work

const chalk = require('chalk')

chalkMeg = chalk.green('Success!')
console.log(chalk.green.bold('Success!'))
console.log(chalk.green.underline.bold('Success!'))
console.log(chalk.green.inverse.bold('Success!'))
console.log(chalk.bgYellow('warning!'))
console.log(chalk.red.inverse.bold('Error'))
console.log(chalk.blue.inverse.bold('Info'))
module.exports = chalkMeg