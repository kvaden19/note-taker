// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
app.get('/', (req, res) => {
    res.send('Welcome to the Note Taker.');
});

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});