const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = Schema({
  name: String,
});
module.exports = mongoose.model('User', userSchema);
