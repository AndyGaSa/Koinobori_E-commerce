const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  id: Number,
});

module.exports = mongoose.model('user', userSchema);
