const Book = require('../models/libro')

const getLibro = (req, res) => {
    Book.find({}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

        return res.status(200).json({libros: books})
    })
}

const getLibroByAnyParam = (req, res) => {
    const {param} = res.body

    Book.find(param, (err, dbBooks) => {
        // hacer las respuestas... 
    })
}

const getLibroByID = (req, res) => {
    //const body = req.body
    const {libroID} = req.body  // anotación= forma elegante

    Book.find({libroID}, (err, books) => {    // find({body.titulo})
        if (err) return res.status(400).json({msg: 'Book not found'})

        return res.status(200).json({libros: books})
    })

}

const getLibroByTitle = (req, res) => {
    
    const {titulo} = req.body

    Book.find({titulo}, (err, books) => {
        if (err) return res.status(400).json({msg: 'book not found'})

        return res.status(200).json({libros: books})
    })

}

const getLibroByDescription = (req, res) => {
    
    const {description} = req.body

    Book.find({description}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

        return res.status(200).json({libros: books})
    })

}

const getLibroByAuthor = (req, res) => {
    
    const {author} = req.body

    Book.find({author}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

        return res.status(200).json({libros: books})
    })

}

const getLibroByISBN = (req, res) => {
    
    const {isbn} = req.body

    Book.find({isbn}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

        return res.status(200).json({libros: books})
    })

}

const getLibroByPrice = (req, res) => {
    
    const {price} = req.body

    Book.find({price}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

        return returnres.status(200).json({libros: books})
    })

}

const getLibroByPublisher = (req, res) => {
    
    const {publisher} = req.body

    Book.find({publisher}, (err, books) => {
        if (err) return res.status(400).json({msg: 'Book not found'})

       return res.status(200).json({libros: books})
    })

}
//CRUD

function createLibro(req, res) {
    const libro = new libro(req.body)
  
    Book.create(libro, (err) => {
        if(err) return res.status(500).json({msg: `Error saving book ${err}`})
  
    return res.status(200).send(`Book created: ${newlibro}`)
    })
}

function replaceLibro(req, res) {
    const { title } = req.params
    const { description } = req.params
    const { author } = req.params
    const { isbn } = req.params
    const { price } = req.params
    const { publisher } = req.params
  
    if (!title || !description || !author || !isbn || !price || !publisher)
      return res.status(400).json({msg: 'Missing parameters'})    
  
    const Replace = req.body
  
    libro.replaceOne(Replace, (err) => {
      if (err)  return res.status(500).json({msg: 'Book not found'})

      return res.status(200).json({msg: 'Successfully updated'}) 
      });
  }

function editLibro(req, res) {
  const { libroId } = req.params

  libro.findByIdAndUpdate(libroId, req.body, { new: true }, (err, books) => {
    if (!libro) return res.status(404).json({msg:'Book not found'})
    if (err) return res.status(404).json({msg: 'Book not found'})

    return res.status(200).json({msg: `Successfully updated ${books}`})   
  })
 }

function deleteLibro(req, res) {
    const { libroId } = req.params;
  
    // findOne poruque en la vida real no tienes el ID para borrar 
    libro.findAndDelete(libroId, (err, libro) => {
      if (err) return res.status(500).json({msg: 'Error'})
      //if (!libro) { return res.status(404).send('Book not found'); }
  
      return res.status(200).json({msg: `Book deleted succesfully ${books}`}) 
    });
}
  
module.exports  = {
    getLibro,
    getLibroByID,
    getLibroByTitle,
    getLibroByDescription,
    getLibroByAuthor,
    getLibroByISBN,
    getLibroByPrice,
    getLibroByPublisher,

    createLibro,
    replaceLibro,
    editLibro,
    deleteLibro,
}