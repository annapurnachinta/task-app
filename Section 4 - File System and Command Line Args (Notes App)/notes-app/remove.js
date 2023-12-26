const fs = require('fs')
const Chalk = require('../node_modules/chalk')

const getNotes = function() {
    return 'Your Notes!'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added')
    }else{
        console.log('Already exists')
    } 
}

const removeNote = function(title){
    const notes = loadNotes()
    const tokeepNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if(notes.length > tokeepNotes.length){
        console.log(Chalk.green.inverse.bold('Note removed!'))
        saveNotes(tokeepNotes)
    }else{
        console.log(Chalk.red.inverse.bold('Not Found!'))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes-app/notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const data = fs.readFileSync('./notes-app/notes.json')
        const dataJSON = data.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }  
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}