const mongoose = require('mongoose');

const { Schema } = mongoose;
const sitesSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  distance: Number,
  pictures: [{ url: String, placeName: String }],
});
module.exports = mongoose.model('Sites', sitesSchema);
