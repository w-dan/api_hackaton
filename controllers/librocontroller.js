
const libro = require('../models/libro');

function getlibro(req, res) {
  libro.find({}, (error, libro) => {
    if (error) { return res.status(500).send(error); }

    return res.status(200).send(libro);
  });
}

function gelibrobytitle(req, res) {
  const { title } = req.params;

  libro.findById(title, (error, libro) => {
    if (!libro) { return res.status(404).send({ message: 'Book not found' }); }

    return res.status(200).send(libro);
  });
}

function gelibrobydescription(req, res) {
    const { description } = req.params;
  
    libro.findById(libroId, (error, libro) => {
      if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
  
      return res.status(200).send(libro);
    });
  }

function gelibrobyauthor(req, res) {
    const { author } = req.params;
  
    libro.findById(author, (error, libro) => {
      if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
  
      return res.status(200).send(libro);
    });
  }  

  function gelibrobyISBN(req, res) {
    const { ISBN } = req.params;
  
    libro.findById(ISBN, (error, libro) => {
      if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
  
      return res.status(200).send(libro);
    });
  }

function gelibrobyprice(req, res) {
    const { price } = req.params;
  
    libro.findById(price, (error, libro) => {
      if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
  
      return res.status(200).send(libro);
    });
  }

function gelibrobypublisher(req, res) {
    const { publisher } = req.params;
  
    libro.findById(publisher, (error, libro) => {
      if (!libro) { return res.status(404).send({ message: 'Book not found' }); }
  
      return res.status(200).send(libro);
    });
  }

function createlibro(req, res) {
  const libro = new libro(req.body);

  libro.save((error, newlibro) => {
    if (error) { return res.status(500).send({ message: `Error saving book ${error}` }); }

    return res.status(200).send(`Book created: ${newlibro}`);
  });
}

function replacelibro(req, res) {
  const { title } = req.params;
  const { description } = req.body;
  const { author } = req.params;
  const { ISBN } = req.params;
  const { price } = req.params;
  const { publisher } = req.params;

  if (!title || !description || !author || !ISBN || !price || !publisher) {
    return res.status(400).send({ message: 'Missing parameters' });
  }

  const Replace = req.body;

  libro.findById(libroId, (error, libro) => {
    if (error) { return res.status(404).send('Book not found'); }

    libro.replaceOne(Replace, (err) => {
      if (err) { return res.status(500).send(err); }

      return res.status(200).send({ message: 'Book successfully updated' });
    });
  });
}

function editlibro(req, res) {
  const { libroId } = req.params;

  libro.findByIdAndUpdate(libroId, req.body, { new: true }, (err, libro) => {
    if (!libro) { return res.status(404).send('Book not found'); }
    if (err) { return res.status(500).send(err); }

    return res.status(200).send(`Book successfully updated ${libro}`);
  });
}

function deletelibro(req, res) {
  const { libroId } = req.params;

  libro.findAndDelete(libroId, (error, libro) => {
    if (error) { return res.status(500).send(error); }
    if (!libro) { return res.status(404).send('Book not found'); }

    return res.status(200).send({ message: `Book deleted succesfully ${libro}` });
  });
}

module.exports = {
  getlibro,
  gelibrobytitle,
  gelibrobydescription,
  gelibrobyauthor,
  gelibrobyISBN,
  gelibrobyprice,
  gelibrobypublisher,

  createlibro,
  replacelibro,
  editlibro,
  deletelibro,
};