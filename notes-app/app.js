const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('Adding note...');
} else if (command === 'delete') {
    console.log('Deleting note...');
}