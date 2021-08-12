const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = mongoose.Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  products: [{
    product: { type: Schema.ObjectId, ref: 'Product' },
    amount: Number,
  }],
});

module.exports = mongoose.model('Cart', cartSchema);
