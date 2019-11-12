const express = require('express');
const bookController = require('../controllers/books.controller');
 
const Router = express.Router();
 
 
// GET
Router.get('/', librocontroller.getlibro);
Router.get('/libroID/:libroId', libroController.getlibrobyID);
Router.get('/title/:title', libroController.getlibrobytitle);
outer.get('/description/:description', librocontroller.getlibrobydescription);
Router.get('/author/:author', librocontroller.getlibrolibrobyauthor);
Router.get('/isbn/:isbn', librocontroller.getlibrobyISBN);
Router.get('/price/:price', librocontroller.getlibrobyprice);
Router.get('/publisher/:publisher', librocontroller.getlibrobypublisher);
 
// POST
Router.post('/', librocontroller.createlibro);
 
// PUT
Router.put('/:libroId', librocontroller.replacelibro);
 
// PATCH
Router.patch('/:libroId', librocontroller.editlibro);
 
// DELETE
Router.delete('/:libroId', librocontroller.deletelibro);
 
module.exports = Router;