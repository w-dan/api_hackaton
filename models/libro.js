const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema({

  libroID: {type: String, required: [true, 'ID is required'], index: { unique: true },},
  title: {type: String, required: [true, 'Title is required'], index: { unique: true },},
  description: {type: String, required: [true, 'Description is required'],},
  author: {type: String, required: [true, 'Author is required'],},
  isbn: {type: String, required: [true, 'ISBN is required'], index: { unique: true },},
  price: { type: Number, required: [true, 'Price is required'],},
  publisher: { type: String, required: [true, 'Publisher is required'],},

})

const libro = mongoose.model('libro', BookSchema)
module.exports = libro