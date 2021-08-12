const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      item: { type: Schema.Types.ObjectId, ref: 'Item' },
      amount: Number
    }
  ]

});

module.exports = model('Cart', cartSchema);
