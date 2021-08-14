const { model, Schema } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  image: {
    type: String,
    default: 'http://',
  },
});

module.exports = model('Product', productSchema);
