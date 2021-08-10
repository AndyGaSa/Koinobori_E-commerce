const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  name: String,
  description: String,
  abv: Number,
  tagline: String
});

module.exports = mongoose.model('Beer', beerSchema);
