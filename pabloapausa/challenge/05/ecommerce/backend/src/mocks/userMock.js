const { model, Schema } = require('mongoose');

const user = Schema({
  name: String,
});

module.exports = model('User', user);
