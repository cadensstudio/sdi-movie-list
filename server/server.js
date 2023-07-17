const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json())

app.get('/movies', (req, res) => {
  const { movieTitle } = req.query;
  if (movieTitle !== undefined) {
    let movieTitleSpaces = movieTitle.replaceAll('-', ' ');
    knex('movie')
      .select('*')
      .where('title', movieTitleSpaces)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => res.status(404).send(err))
  } else {
    knex('movie')
      .select('*')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  }
});

app.post('/movies', (req, res) => {
  let newMovie = req.body;
  console.log(newMovie);
  knex('movie')
    .insert(newMovie)
    .then(() => {
      res.status(201).send(newMovie);
    })
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});