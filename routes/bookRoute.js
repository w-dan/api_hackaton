const express = require('express');
const bookController = require('../controllers/books.controller');

const Router = express.Router();


// GET
Router.get('/', bookController.getBooks);
Router.get('/id/:bookId', bookController.getBookByID);
Router.get('/title/:title', bookController.getBookByTitle);
Router.get('/isbn/:isbn', bookController.getBookByISBN);
Router.get('/description/:description', bookController.getBookByDescription);
Router.get('/author/:author', bookController.getBookByAuthor);
Router.get('/price/:price', bookController.getBookByPrice);
Router.get('/publisher/:publisher', bookController.getBookByPublishr);
Router.get('/date/:date', bookController.getBookByDate);

// POST
Router.post('/', bookController.createBook);

// PUT
Router.put('/:bookId', bookController.replaceBook);

// PATCH
Router.patch('/:bookId', bookController.editBook);

// DELETE
Router.delete('/:bookId', bookController.deleteBook);

module.exports = Router;
