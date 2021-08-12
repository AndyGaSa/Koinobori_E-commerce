const { model, Schema } = require('mongoose');

const productItemSchema = Schema({
  name: String,
  price: Number,
  stock: Number
});

module.exports = model('Product', productItemSchema);
