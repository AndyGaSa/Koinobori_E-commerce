const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = Schema({
  name: String,
  familyName: String

});
module.exports = mongoose.model('User', userSchema);
