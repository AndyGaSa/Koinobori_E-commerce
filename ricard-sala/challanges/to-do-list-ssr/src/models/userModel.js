const { model, Schema } = require('mongoose');

const userModel = Schema({
  user: String,
  email: String,
});

module.exports = model('Users', userModel);
