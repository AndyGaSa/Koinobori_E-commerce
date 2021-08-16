const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  image_url: String,
  description: String,
  price: Number,
  stock: Number,
});

module.exports = model('Product', productSchema);
