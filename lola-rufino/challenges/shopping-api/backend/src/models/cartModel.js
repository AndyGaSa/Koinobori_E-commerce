const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }, // la base de datos sólo almacena el objectId
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      amount: Number
    }
  ]
});

module.exports = model('Cart', cartSchema);
