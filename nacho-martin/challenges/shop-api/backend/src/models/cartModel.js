const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      item: { type: Schema.Types.ObjectId, ref: 'Item' },
      amount: Number,
      types: String
    }
  ]

});

module.exports = model('Cart', cartSchema);
