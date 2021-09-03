const { model, Schema } = require('mongoose');

const cartModel = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    },
  ],
});

module.exports = model('cart', cartModel);
