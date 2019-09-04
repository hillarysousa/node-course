const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Hillary.');

fs.appendFileSync('notes.txt', ' I live in Rio de Janeiro.');