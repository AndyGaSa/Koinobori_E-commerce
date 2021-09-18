const { model, Schema } = require('express');

const userSchema = new Schema(
  {
    email: String,
    passport: String,
  },
);

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('Users', userSchema);
