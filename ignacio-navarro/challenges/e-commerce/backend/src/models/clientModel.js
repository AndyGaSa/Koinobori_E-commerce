const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  user: String,
  email: String,
});

module.exports = mongoose.model('Client', clientSchema);
