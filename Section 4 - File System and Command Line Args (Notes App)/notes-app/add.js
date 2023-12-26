const fs = require('fs')

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
        console.log(Chalk.green.inverse.bold('Note Added!'))
    }else{
        console.log(Chalk.red.inverse.bold('Note already exist!'))
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
    addNote: addNote
}