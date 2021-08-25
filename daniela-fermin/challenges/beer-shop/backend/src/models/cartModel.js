const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Beer' },
      amount: Number
    }
  ]
});

module.exports = model('Cart', cartSchema);
