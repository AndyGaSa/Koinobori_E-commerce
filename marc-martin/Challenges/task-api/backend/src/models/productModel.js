const { model, Schema } = require('mongoose');

const productSchema = Schema({
  description: String,
  price: Number,
  stock: Number
});

module.exports = model('Product', productSchema);
