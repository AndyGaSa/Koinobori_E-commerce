const { model, Schema } = require('mongoose');

const sneakerSchema = Schema({
  name: String,
  img: String,
  price: String,
  stock: Number,
  amount: Number,
});

module.exports = model('Sneakers', sneakerSchema);
