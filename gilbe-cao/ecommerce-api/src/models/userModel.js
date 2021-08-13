const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
});

module.exports = model('User', userSchema);
