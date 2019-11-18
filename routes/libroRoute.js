const express = require('express');
const bookscontroller = require('../controllers/books.controller');

const Router = express.Router();

// GET
Router.get('/', bookscontroller.getLibro);
Router.get('/libroID/:libroID', bookscontroller.getLibroByID);
Router.get('/title/:title', bookscontroller.getLibroByTitle);
Router.get('/description/:description', bookscontroller.getLibroByDescription);
Router.get('/author/:author', bookscontroller.getLibroByAuthor);
Router.get('/isbn/:isbn', bookscontroller.getLibroByISBN);
Router.get('/price/:price', bookscontroller.getLibroByPrice);
Router.get('/publisher/:publisher', bookscontroller.getLibroByPublisher);

// CREATE
Router.post('/', bookscontroller.createBook);

// REPLACE
Router.put('/:libroId', bookscontroller.replaceBook);

// PATCH
Router.patch('/:libroId', bookscontroller.editBook);

// DELETE
Router.delete('/:libroId', bookscontroller.deleteBook);

module.exports = Router;
