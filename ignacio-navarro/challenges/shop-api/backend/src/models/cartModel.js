const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const cartSchema = mongoose.Schema({
  user: ObjectId,
  items: [{ itemId: ObjectId }, { amount: Number }],
});

module.exports = mongoose.model('Cart', cartSchema);
