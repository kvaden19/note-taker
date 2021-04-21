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

};