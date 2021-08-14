const { model, Schema } = require('mongoose');

const cart = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    amount: Number,
  }],
});

module.exports = model('Cart', cart);
