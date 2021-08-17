const { model, Schema } = require('mongoose');

const beerSchema = Schema({
  name: String,
  price: Number,
  stock: Number
});

module.exports = model('Beer', beerSchema);
