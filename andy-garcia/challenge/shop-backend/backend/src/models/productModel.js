const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  naem: String,
  price: Number,
  stock: Number,
});
module.exports = mongoose.model('Product', productSchema);
