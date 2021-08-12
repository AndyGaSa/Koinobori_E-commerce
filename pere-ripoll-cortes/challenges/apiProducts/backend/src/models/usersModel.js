const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
});

const model = mongoose.model('users', userSchema);

module.exports = model;
