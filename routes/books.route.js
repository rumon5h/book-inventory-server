const express = require('express');
const router = express.Router();
const booksControllers = require('../controllers/books.controllers');

router.route('/').get(booksControllers.getBooks)


module.exports = router;