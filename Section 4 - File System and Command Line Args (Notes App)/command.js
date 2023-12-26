const yargs = require('./node_modules/yargs')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function(){
        console.log('Removing a new note!')
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function(){
        console.log('Listing all your notes!')
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function(){
        console.log('Reading a note!')
    }
})

yargs.argv