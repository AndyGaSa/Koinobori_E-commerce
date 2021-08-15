const { model, Schema } = require('mongoose');

const productSchema = Schema({
  image: String,
  name: String,
  price: Number,
  stock: Number,
  currency: {
    type: String,
    default: '€',
  },
  description: {
    type: String,
    default: 'Los mejores caramelos del mundo!',
  },
});

module.exports = model('Product', productSchema);
