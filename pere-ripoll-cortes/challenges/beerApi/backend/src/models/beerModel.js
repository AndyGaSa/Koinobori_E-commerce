const mongoose = require('mongoose');

const beerSchema = mongoose.Schema(
  {
    name: String,
    tagline: String,
    firts_brewed: String,
    description: String,
    abv: Number,
  },
);

module.exports = mongoose.model('beer', beerSchema);
