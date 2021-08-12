const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number
});

module.exports = model('Product', productSchema);
