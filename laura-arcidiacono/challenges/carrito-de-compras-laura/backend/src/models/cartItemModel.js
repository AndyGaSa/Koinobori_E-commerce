const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  user: Object,
  products: Object
});

module.exports = mongoose.model('CartItem', cartItemSchema);
