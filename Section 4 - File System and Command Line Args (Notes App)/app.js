const yargs = require('./node_modules/yargs')

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding notes!')
} else if(command === 'remove'){
    console.log('Removing notes!')
}

console.log(process.argv)
console.log(yargs.argv)