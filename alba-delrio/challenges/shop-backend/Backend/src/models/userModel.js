const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = Schema({
  name: String,
  userCart: { type: Schema.Types.ObjectId, ref: 'Cart' }
});
module.exports = mongoose.model('User', userSchema);
