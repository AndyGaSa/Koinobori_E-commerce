const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  name: String,
  description: String,
  abv: Number,
});
module.exports = mongoose.module('Beer', beerSchema);
