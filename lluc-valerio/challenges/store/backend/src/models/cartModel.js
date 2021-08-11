const mongoose = require('mongoose');
const User = require('./userModel');
const Product = require('./productModel');

const cartSchema = mongoose.Schema({
  name: { type: mongoose.Schema.ObjectId, ref: User },
  products: [{
    product: { type: mongoose.Schema.ObjectId, ref: Product },
    amount: Number
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
