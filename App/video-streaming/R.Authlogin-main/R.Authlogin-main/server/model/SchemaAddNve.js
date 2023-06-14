// SchemaAddNve.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
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
  description: {
    type: Number,
    required: true
  },
  rvideoUrl: {
    type: Date,
    required: true
  }
});

const Addmve = mongoose.model('Addmve', movieSchema);

module.exports = Addmve;
