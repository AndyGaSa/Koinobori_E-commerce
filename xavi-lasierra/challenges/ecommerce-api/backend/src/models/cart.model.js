const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{
    productInformation: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    amount: Number
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
