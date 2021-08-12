const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = mongoose.model('User');
const Product = mongoose.model('Product');

const cartSchema = mongoose.Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  products: [
    {
      type: Schema.ObjectId, ref: 'Product',
    },
    { amount: Number },
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
