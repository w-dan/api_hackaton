const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({

  title: {
    type: String,
    required: [true, 'Title required'],
    index: { unique: true },
  },

  isbn: {
    type: String,
    required: [true, 'ISBN required'],
    index: { unique: true },
  },

  description: {
    type: String,
    required: [true, 'Description required'],
  },

  author: {
    type: String,
    required: [true, 'Author required'],
  },

  date: {
    type: Date,
    required: [true, 'Date required'],
  },

  price: {
    type: Number,
    required: [true, 'Price required'],
  },

  publisher: {
    type: String,
    required: [true, 'Publisher required'],
  },

});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;
