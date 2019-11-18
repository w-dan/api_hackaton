/* eslint-disable consistent-return */

const Book = require('../models/libro');

const getLibro = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};
const getLibroByID = (req, res) => {
  const { libroID } = req.body;

  Book.find({ libroID }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByTitle = (req, res) => {
  const { titulo } = req.body;

  Book.find({ titulo }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByDescription = (req, res) => {
  const { description } = req.body;

  Book.find({ description }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByAuthor = (req, res) => {
  const { author } = req.body;

  Book.find({ author }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByISBN = (req, res) => {
  const { isbn } = req.body;

  Book.find({ isbn }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByPrice = (req, res) => {
  const { price } = req.body;

  Book.find({ price }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

const getLibroByPublisher = (req, res) => {
  const { publisher } = req.body;

  Book.find({ publisher }, (err, books) => {
    if (err) return res.status(400).json({ msg: 'Book not found' });

    return res.status(200).json({ libros: books });
  });
};

// CRUD

function createBook(req, res) {
  const book = new Book(req.body);

  Book.create(book, (err) => {
    if (err) { return res.status(500).send({ message: `Error saving book ${err}` }); }

    return res.status(200).send({ message: 'Book added successfully' });
  });
}

function replaceBook(req, res) {
  const { title } = req.body;
  const { isbn } = req.body;
  const { description } = req.body;
  const { author } = req.body;
  const { date } = req.body;
  const { price } = req.body;
  const { editorial } = req.body;

  const { bookId } = req.params;

  if (!title || !isbn || !description || !author || !date || !price || !editorial) {
    return res.status(400).send({ message: 'Missing parameters' });
  }

  const bookReplacement = req.body;

  Book.find({ bookId }, (err) => {
    if (err) return res.status(404).send({ message: `Book not found ${err}` });

    Book.replaceOne(bookReplacement, (error) => {
      if (error) return res.status(500).send({ error });

      return res.status(200).send({ message: 'Book replaced successfully' });
    });
  });
}

function editBook(req, res) {
  const { bookId } = req.params;

  Book.findByIdAndUpdate(bookId, req.body, { new: true }, (err, libro) => {
    if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
    if (err) { return res.status(500).send({ err }); }

    return res.status(200).send(`Book updated successfully ${libro}`);
  });
}

function deleteBook(req, res) {
  const { libroId } = req.params;

  Book.findAndDelete(libroId, (err, libro) => {
    if (err) return res.status(500).json({ msg: 'Error' });
    if (!libro) { return res.status(404).send('Book not found'); }

    return res.status(200).json({ msg: `Book deleted succesfully ${libro}` });
  });
}

module.exports = {
  getLibro,
  getLibroByID,
  getLibroByTitle,
  getLibroByDescription,
  getLibroByAuthor,
  getLibroByISBN,
  getLibroByPrice,
  getLibroByPublisher,

  editBook,
  createBook,
  replaceBook,
  deleteBook,
};
