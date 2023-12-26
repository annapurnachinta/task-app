const yargs = require('../node_modules/yargs')
// const notes = require('./add.js')
// const removenotes = require('./remove.js')

const arrowfunction = require('./arrow-function')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string' 
        }
    },
    handler (argv){
        arrowfunction.addNote(argv.title, argv.body)
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv){
        arrowfunction.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler (){
        arrowfunction.listNote()
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler (argv){
        arrowfunction.readNote(argv.title)
    }
})

yargs.parse()