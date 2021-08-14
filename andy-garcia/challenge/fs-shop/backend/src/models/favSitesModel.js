const mongoose = require('mongoose');

const { Schema } = mongoose;
const cartSchema = Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  favSites: [{
    site: { type: Schema.ObjectId, ref: 'Sites' },
    amount: Number,
  }],
});
module.exports = mongoose.model('favSites', cartSchema);
