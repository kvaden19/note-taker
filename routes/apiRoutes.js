const db = require('../db/db.json');

// This is a npm package that generates unique IDs
const generateUUId = require('unique-identifier');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        let note = req.body;
        // Add key 'id' and a unique identifier to each object
        note['id'] = generateUUId();

        // Add the new note object to the db array
        db.push(note);
        res.json(note);
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log('Note deleted');
        // receive a query parameter containing the id of a note to delete 
        // Read all notes from the `db.json` file
        // remove the note with the given `id` property
        // Rewrite the notes to the `db.json` file
    });

};