const fs = require('fs')
const book = {
    title: 'ABC',
    author: 'XYZ'
}

// convert object to JSON
const bookJOSN = JSON.stringify(book)
console.log(bookJOSN)

// convert JSON to object
const parsedData = JSON.parse(bookJOSN)
console.log(parsedData.author,parsedData.title )