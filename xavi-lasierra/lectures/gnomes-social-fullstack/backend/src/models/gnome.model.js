const { model, Schema } = require('mongoose');

const gnomeSchema = Schema({
  picture: { type: String, default: 'http://placehold.it/32x32' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: { type: Date, default: new Date() },
  tags: [String],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  adversaries: [{ type: Schema.Types.ObjectId, ref: 'Gnome' }],
  greeting: String,
  favouriteFruit: String
});

module.exports = model('Gnome', gnomeSchema);
