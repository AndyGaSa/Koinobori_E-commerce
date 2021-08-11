const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('Products', productsSchema);
