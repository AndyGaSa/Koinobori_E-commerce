const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  id: Number,
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  abv: Number,
});

module.exports = mongoose.model('Beer', beerSchema);
