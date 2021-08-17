const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  img: {
    type: String,
    default: 'https://i.ibb.co/qWmJXLM/default.png'
  }
});

module.exports = mongoose.model('Product', productSchema);
