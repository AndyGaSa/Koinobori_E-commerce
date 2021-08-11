const mongoose = require('mongoose');

const { Schema } = mongoose;
const Products = mongoose.model('Products');
const Users = mongoose.model('Users');

const cartSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: Users },
  products: [{ type: Schema.Types.ObjectId, ref: Products },
    { amount: Number }]
});

module.exports = mongoose.model('Cart', cartSchema);
