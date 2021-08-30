const { Schema, model } = require('mongoose');

const gnomoSchema = Schema({
  image: String,
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: {
    type: Date,
    default: Date.now
  },
  tags: [String],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'Gnomo'
  }],
  adversaries: [{
    type: Schema.Types.ObjectId,
    ref: 'Gnomo'
  }],
  greeting: String,
  favoriteFruit: String,
  email: String,
  password: String
});

gnomoSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};
module.exports = model('Gnomo', gnomoSchema);
