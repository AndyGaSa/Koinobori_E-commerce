const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};
module.exports = model('User', userSchema);
