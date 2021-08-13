const mongoose = require('mongoose');

const { Schema } = mongoose;
const articleSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  type: String

});
module.exports = mongoose.model('Product', articleSchema);
