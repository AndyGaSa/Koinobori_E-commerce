const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'todo' },
  product: {
    type: mongoose.Schema.ObjectId, ref: 'product',
  },

});

module.exports = mongoose.model('cart', cartSchema);
