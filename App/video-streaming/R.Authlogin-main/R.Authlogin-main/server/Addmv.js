// Addmve.js

const express = require('express');
const router = express.Router();
const Addmve = require('../model/SchemaAddNve');

// Store data in MongoDB
router.post('/', (req, res) => {
  const { movieName, flexiUrl, posterUrl, rating, releaseDate, description } = req.body;
  const newMovie = new Addmve({
    movieName,
    flexiUrl,
    posterUrl,
    rating,
    releaseDate,
    description
  });

  newMovie.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
