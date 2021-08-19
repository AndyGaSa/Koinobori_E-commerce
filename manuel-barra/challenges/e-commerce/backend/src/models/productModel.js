const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    Image: String,
    stast: Number,
    number: Number,
    position: String
  }
);

module.exports = mongoose.model('products', cartSchema);
