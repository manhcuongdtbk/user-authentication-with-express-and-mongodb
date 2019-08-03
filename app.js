// Import dependencies
const express = require('express');

// Variables
const app = express();

// Parse incoming request
express.json();
express.urlencoded({ extended: false });
