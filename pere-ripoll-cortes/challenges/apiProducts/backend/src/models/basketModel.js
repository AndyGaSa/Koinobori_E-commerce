const mongoose = require('mongoose');

const { Schema } = mongoose;

const basketSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
});

const model = mongoose.model('baskets', basketSchema);

module.exports = model;
