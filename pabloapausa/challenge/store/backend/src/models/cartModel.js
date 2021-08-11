const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  username: String,
  products: Object,
});

module.exports = mongoose.model('cart', cartSchema);
