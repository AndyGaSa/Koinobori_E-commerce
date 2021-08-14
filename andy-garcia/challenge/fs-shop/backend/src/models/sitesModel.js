const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  distance: Number,
  pictures: [{ url: String }],
});
module.exports = mongoose.model('Sites', productSchema);
