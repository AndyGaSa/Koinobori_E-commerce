const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = model('Product', productSchema);
