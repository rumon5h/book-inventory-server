const express = require('express');
const router = express.Router();
const booksControllers = require('../controllers/books.controllers');

router.route('/').get(booksControllers.getBooks).post(booksControllers.createNewBook)

router.route('/:id').get(booksControllers.getBookById)

module.exports = router;