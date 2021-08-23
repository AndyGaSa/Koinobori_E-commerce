const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  image: String
});

module.exports = model('Product', productSchema);
