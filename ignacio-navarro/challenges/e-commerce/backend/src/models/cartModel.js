const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: String,
  products: {
    product: mongoose.SchemaType.ObjectId,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
