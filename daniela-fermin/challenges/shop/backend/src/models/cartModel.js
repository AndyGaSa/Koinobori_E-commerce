const { model, Schema } = require('mongoose');

const cartSchema = Schema({

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      },
      amount: Number
    }
  ]
});

module.exports = model('Product', cartSchema);
