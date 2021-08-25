const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  picture: String
});

module.exports = mongoose.model('User', userSchema);
