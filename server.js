// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();
const PORT = process.env.PORT || 7800;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
app.use(express.static('public'));
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});