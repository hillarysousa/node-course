const fs = require('fs');

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes);
    fs.writeFileSync('data.json', data);
}

const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log('New note added!');
    } else {
        console.log('This note title already exists. Please write a different title.');
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};