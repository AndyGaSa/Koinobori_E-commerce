const mongoose = require('mongoose');

const { Schema } = mongoose;
const articleSchema = Schema({
  name: String,
  price: Number,
  currency: String,
  stock: Number

});
module.exports = mongoose.model('Article', articleSchema);
