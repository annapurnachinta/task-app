const fs = require('fs')
const book = {
    title: 'ABC',
    author: 'XYZ'
}

const bookJOSN = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJOSN)