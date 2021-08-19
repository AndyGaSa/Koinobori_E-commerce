const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Item', itemSchema);
