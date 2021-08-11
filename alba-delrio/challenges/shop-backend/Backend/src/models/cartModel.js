const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: String,
  products: [{
    product: String,
    amount: Number
  }]

});

module.exports = mongoose.model('Cart', cartSchema);
