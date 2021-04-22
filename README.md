# note-taker

## Acceptance Criteria
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

### TODO
- Troubleshoot writing new note
- Try DELETE bonus

### Questions
- Does it matter which port I choose?

#### Attributions
Uses "unique-identifer" npm package
