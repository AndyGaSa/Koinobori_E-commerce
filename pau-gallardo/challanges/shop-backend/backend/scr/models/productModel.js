const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Beer', productSchema);
