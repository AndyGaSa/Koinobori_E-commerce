const { model, Schema } = require('mongoose');

const sneakerSchema = Schema({
  name: String,
  img: String,
  price: String,
  stock: Number,
});

module.exports = model('Sneaker', sneakerSchema);
