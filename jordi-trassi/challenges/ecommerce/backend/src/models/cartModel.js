const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      amount: Number,
    }],
});

module.exports = model('Cart', cartSchema);
