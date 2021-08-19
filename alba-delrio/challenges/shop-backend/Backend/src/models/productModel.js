const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number
});
module.exports = mongoose.model('Product', productSchema);
