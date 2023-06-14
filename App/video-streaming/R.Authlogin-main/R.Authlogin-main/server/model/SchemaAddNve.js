// SchemaAddNve.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  flexiUrl: {
    type: String,
    required: true
  },
  posterUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Addmve = mongoose.model('Addmve', movieSchema);

module.exports = Addmve;
