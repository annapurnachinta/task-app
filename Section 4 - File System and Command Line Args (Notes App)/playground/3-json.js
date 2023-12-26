const fs = require('fs')

const databuffer = fs.readFileSync('./playground/1-json.json')
console.log(databuffer.toString())