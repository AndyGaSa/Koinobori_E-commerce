const { model, Schema } = require('mongoose');

const product = Schema({
  name: String,
  price: Number,
  stock: Boolean,
});

module.exports = model('Product', product);
