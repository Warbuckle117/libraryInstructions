const express = require('express')
const app = express()

const bookMockData = require('./mockData/books.json')
const cors = require('cors')
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());

app.get('/', function(req, res) {
    res.status(200).send("info at other endpoints.")
  })

app.get('/books', (req, res) => {
    // res.status(200).json(bookMockData)
    
    knex
    .select('*')
    .from('books')
    .then(data => res.status(200).json({
        message: "success!",
        data: data
        })
    )
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    )
    
})

app.get('/books/:id', (req, res) => {
    //res.status(200).send(bookMockData[req.params.id])
    
    knex('books')
    .select('*')
    .where("id", req.params.id)
    .then(data => res.status(200).json({
        message: "success!",
        data: data
        })
    )
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    )

})

app.post('/books', function(req,res) {
  const book = req.body;

  knex('books').insert({
    "bookTitle":            book.bookTitle,
    "Author":               book.Author,
    "ISBNNumber":           book.ISBNNumber,
    "bookCheckedOut":       book.bookCheckedOut
  })
  .then((data) => {
    res.status(201).send({
      message: 'Book Created Successfully',
    })
    .catch(data => res.status(400).send({error: 'ERROR'}))
  })
})

module.exports = app;