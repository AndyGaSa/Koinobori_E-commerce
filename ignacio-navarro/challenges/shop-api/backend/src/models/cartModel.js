const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = ({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    amount: Number,
  }],
});
module.exports = mongoose.model('Cart', cartSchema);
