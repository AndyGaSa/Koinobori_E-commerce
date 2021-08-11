const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: { type: Number, default: 70 },
  stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);
