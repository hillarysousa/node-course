const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('data.json', data);
}

const getNotes = () => "Your notes...";

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes:'));
    notes.forEach(note => {
        console.log(note.title);
    })
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('This note title already exists. Please write a different title.'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const existingNotes = notes.filter((note) => note.title !== title);

    if (notes.length > existingNotes.length) {
        saveNotes(existingNotes);
        console.log(chalk.green.inverse('Removed note "' + title + '"'));
    } else {
        console.log(chalk.red.inverse('No note found with title "' + title + '"'));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};