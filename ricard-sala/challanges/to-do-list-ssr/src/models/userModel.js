const { model, Schema } = require('mongoose');

const userModel = Schema({
  name: String,
  email: String,
});

module.exports = model('Users', userModel);
