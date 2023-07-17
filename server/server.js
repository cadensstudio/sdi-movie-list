const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

const app = express();
const port = 3001;

app.use(cors());

app.get('/movies', (req, res) => {
  knex('movie')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json(err))
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});