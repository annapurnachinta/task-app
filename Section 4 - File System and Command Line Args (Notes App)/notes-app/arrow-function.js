const fs = require('fs')
const Chalk = require('../node_modules/chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if(duplicateNote === underfined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(Chalk.green.inverse.bold('Successfully added!'))
    }else{
        console.log(Chalk.red.inverse.bold('Already exist!'))
    } 
}

const removeNote = (title) => {
    const notes = loadNotes()

    const tokeepNotes = notes.filter((note) => note.title !== title)

    if(notes.length > tokeepNotes.length){
        console.log(Chalk.green.inverse.bold('Note removed!'))
        saveNotes(tokeepNotes)
    }else{
        console.log(Chalk.red.inverse.bold('Not Found!'))
    }
}

const listNote = () => {
    const notes = loadNotes()

    console.log(Chalk.yellow.inverse.bold('Your Notes!'))

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const readNote = notes.find((note) => note.title === title)

    if(readNote){
        console.log(Chalk.inverse(readNote.title))
        console.log(readNote.body)
    }else{
        console.log(Chalk.red.inverse('Not Found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes-app/notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}