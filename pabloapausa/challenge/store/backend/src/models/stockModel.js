const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
  name: String,
  price: Number,
});

module.exports = mongoose.model('stock', stockSchema);
