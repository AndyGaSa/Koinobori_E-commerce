const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  products: Array
});

module.exports = mongoose.model('Product', cartSchema);
