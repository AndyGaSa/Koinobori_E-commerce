const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    Image: {
      type: String,
      default: 'jordi'
    }
  }
);

module.exports = mongoose.model('products', cartSchema);
