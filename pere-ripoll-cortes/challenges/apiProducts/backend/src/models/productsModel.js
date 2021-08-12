const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});

const model = mongoose.model('products', productSchema);

module.exports = model;
