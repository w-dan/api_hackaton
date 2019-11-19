/* eslint-disable consistent-return */
const Book = require('../models/book');

function getBooks(req, res) {
  Book.find({}, (err, book) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ book });
  });
}

function getBookByID(req, res) {
  const { bookId } = req.params;

  Book.find({ bookId }, (error, book) => {
    if (error) if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ book });
  });
}

function getBookByTitle(req, res) {
  const { title } = req.params;

  Book.find({ title }, (err, book) => {

    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }
    
    return res.status(200).json({ book });
  });
}

function getBookByISBN(req, res) {
  const { isbn } = req.params;

  Book.find({ isbn }, (err, book) => {
    if (err) { return res.status(400).json({ msg: 'Book not found' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function getBookByDescription(req, res) {
  const { description } = req.params;

  Book.find({ description }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function getBookByDate(req, res) {
  const { date } = req.params;

  Book.find({ date }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function getBookByAuthor(req, res) {
  const { author } = req.params;

  Book.find({ author }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function getBookByPrice(req, res) {
  const { price } = req.params;

  Book.find({ price }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).send({ message: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function getBookByPublishr(req, res) {
  const { editorial } = req.params;

  Book.find({ editorial }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({ book });
  });
}

function createBook(req, res) {
  const book = new Book(req.body);

  Book.create(book, (err) => {
    if (err) { return res.status(500).json({ msg: `Error saving book ${err}` }); }

    return res.status(200).json({ msg: 'Book added successfully' });
  });
}

function replaceBook(req, res) {
  const { title } = req.body;
  const { isbn } = req.body;
  const { description } = req.body;
  const { author } = req.body;
  const { date } = req.body;
  const { price } = req.body;
  const { publisher } = req.body;

  const { bookId } = req.params;

  if (!title || !isbn || !description || !author || !date || !price || !publisher) {
    return res.status(400).json({ msg: 'Missing parameters' });
  }

  const bookReplacement = req.body;

  Book.find({ bookId }, (err) => {
    if (err) return res.status(404).json({ msg: `Book not found ${err}` });

    Book.replaceOne(bookReplacement, (error) => {
      if (error) return res.status(500).json({ msg: 'error' });

      return res.status(200).json({ msg: 'Book replaced successfully' });
    });
  });
}

function editBook(req, res) {
  const { bookId } = req.params;

  Book.findByIdAndUpdate(bookId, req.body, { new: true }, (err, book) => {
    if (err) { return res.status(500).json({ msg: 'error' }); }
    if (!book) { return res.status(404).json({ msg: 'Book not found' }); }

    return res.status(200).json({msg: `Book updated successfully ${book}`});
  });
}

function deleteBook(req, res) {
  const { bookId } = req.params;

  Book.findOneAndDelete({ bookId }, (err, book) => {
    if (err) { return res.status(500).send({ err }); }
    if (!book) { return res.status(404).json({msg: 'Book not found' }); }

    return res.status(200).json( {msg: `Book updated successfully ${book}` });
  });
}

module.exports = {
  getBooks,
  getBookByID,
  getBookByAuthor,
  getBookByDate,
  getBookByDescription,
  getBookByISBN,
  getBookByPrice,
  getBookByPublishr,
  getBookByTitle,
  createBook,
  replaceBook,
  editBook,
  deleteBook,
};
