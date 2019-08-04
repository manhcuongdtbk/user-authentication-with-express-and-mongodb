// Import dependencies
const express = require('express');

// Variables
const app = express();
const port = 3000;

// Parse incoming request
express.json();
express.urlencoded({ extended: false });

// Serve static files from /public
app.use(express.static(__dirname + '/public'));

// View engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Include routes
const routes = require('./routes/index');
app.use('/', routes);

// listen on port 3000
app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});
