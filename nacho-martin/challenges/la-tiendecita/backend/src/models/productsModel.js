const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  model: String,
  franchise: String,
  size: String,
  img: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
