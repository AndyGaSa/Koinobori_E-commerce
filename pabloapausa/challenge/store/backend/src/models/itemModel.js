const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: String,
  price: Number,
});

module.exports = mongoose.model('item', itemSchema);
