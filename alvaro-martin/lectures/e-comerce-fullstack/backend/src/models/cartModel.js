const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  users: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'user' },

  }],
  products: [{
    product: { type: mongoose.Schema.ObjectId, ref: 'product' },
    amount: Number,
  }],

});

module.exports = mongoose.model('cart', cartSchema);
