var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var bookSchema = new Schema({
  title:    { type: String },
  year:     { type: Number },
  author:  { type: String },
  cover:   { type: String },
  chapters:  { type: Number },
  genre:    { type: String, enum:
  ['Drama', 'Mystery', 'Sci-Fi', 'Fantasy', 'Philosophy']
	    },
  summary:  { type: String }
});

module.exports = mongoose.model('book', bookSchema);