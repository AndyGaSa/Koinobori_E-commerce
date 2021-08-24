const { Schema, model } = require('mongoose');

const gnomeSchema = new Schema({
  picture: { type: String, default: 'https://i.ibb.co/Pwz4RbB/gnome-pic.jpg' },
  email: String,
  password: String,
  age: Number,
  eyeColor: { type: String, default: 'The color of eyes' },
  name: String,
  gender: { type: String, default: 'Gnome' },
  about: { type: String, default: 'I live as a gnome' },
  tags: [String],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  adversaries: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  greeting: String,
  favoriteFruit: String
});

gnomeSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};
module.exports = model('Gnome', gnomeSchema);
