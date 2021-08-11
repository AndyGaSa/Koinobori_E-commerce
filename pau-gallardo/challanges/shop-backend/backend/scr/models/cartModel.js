import { ObjectId } from 'mongoose';

const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: ObjectId,
  products: Array,
});

module.exports = mongoose.model('Cart', cartSchema);
