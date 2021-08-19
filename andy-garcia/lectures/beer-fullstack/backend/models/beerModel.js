const mongoose = require('mongoose');

const BeersCollectionSchema = mongoose.Schema({
  name: String,
  tagline: String,
  abv: Number,
});
module.exports = mongoose.model('BeersCollection', BeersCollectionSchema);
