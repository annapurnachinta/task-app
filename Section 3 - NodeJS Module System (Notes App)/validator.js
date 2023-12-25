// npm install validator

const validator = require('./node_modules/validator')

const emailID1 = validator.isEmail('example@gmail.com')
const emailID2 = validator.isEmail('example')
const URL1 = validator.isURL('hrr/goo')
const URL2 = validator.isURL('http://google.com')

module.exports = URL1