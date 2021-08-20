const { model, Schema } = require('mongoose');

const itemSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
});

module.exports = model('Item', itemSchema);
