// Import dependencies
const express = require('express');

// Variables
const router = express.Router();

router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

module.exports = router;
