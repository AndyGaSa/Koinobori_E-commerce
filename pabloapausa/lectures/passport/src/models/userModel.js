const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
});

userSchema.methods.isValid = function isValid(password) {
  return password === this.password;
};
module.exports = model('User', userSchema);
