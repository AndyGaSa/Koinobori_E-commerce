const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Users', usersSchema);
