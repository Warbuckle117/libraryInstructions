const express = require('express')
const app = express()
const port = 8080
const bookMockData = require('./mockData/books.json')
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/books', (req, res) => {
    // res.send(200)
    res.status(200).json(bookMockData)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))