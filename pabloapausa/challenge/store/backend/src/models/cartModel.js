const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    amount: Number,
  }],
});

module.exports = model('Cart', cartSchema);
