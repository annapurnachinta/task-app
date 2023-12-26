// challenge: Work with JSON and file system 

// 1. load and parse the JSOn data
// 2. change the name and age property using your info
// 3. stringify the change object and overwrite the original data
// 4. test your work by viewing data in the JSON file

const fs = require('fs')

const databuffer = fs.readFileSync('./playground/4-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Mohan"
data.age = 30

const bookJOSN = JSON.stringify(data)
fs.writeFileSync('./playground/4-json.json',bookJOSN )