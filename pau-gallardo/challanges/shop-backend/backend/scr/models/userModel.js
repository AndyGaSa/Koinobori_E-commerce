const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Beer', userSchema);
