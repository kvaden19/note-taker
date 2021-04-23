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
        const notesID = req.params.id;
        let notesIndex;
        for (let i=0; i < db.length; i++) {
            if (db[i].id === notesID) {
                notesIndex = i;
            }
        }       
        db.splice(notesIndex, 1);
        res.json(db);
    });

};