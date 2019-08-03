// Import dependencies
const express = require('express');

// Variables
const app = express();

// Parse incoming request
express.json();
express.urlencoded({ extended: false });

// View engine setup
app.use('view engine', 'pug');
app.set('views', __dirname + '/views');
