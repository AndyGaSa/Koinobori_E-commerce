const mongoose = require('mongoose');

const { Schema } = mongoose;
const cartSchema = Schema({

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    amount: Number
  }]

});

module.exports = mongoose.model('Cart', cartSchema);
