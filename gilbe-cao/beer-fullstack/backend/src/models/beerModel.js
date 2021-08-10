const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  abv: Number,
});

module.exports = mongoose.model('Beer', beerSchema);
