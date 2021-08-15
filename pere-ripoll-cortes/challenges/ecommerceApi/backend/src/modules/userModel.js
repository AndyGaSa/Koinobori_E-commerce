const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('user', userModel);
