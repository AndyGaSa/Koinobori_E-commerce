const mongoose = require('mongoose');

const productItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('Product', productItemSchema);
