const { model, Schema } = require('mongoose');

const gnomeSchema = Schema({
  picture: { type: String, default: 'https://cdna.artstation.com/p/assets/images/images/026/485/526/large/jill-hatzer-david-the-gnome-in-tub.jpg?1588894823' },
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  about: String,
  registered: { type: Date, default: new Date() },
  tags: [String],
  friends: { type: [Schema.Types.ObjectId], ref: 'Gnome' },
  adversaries: { type: [Schema.Types.ObjectId], ref: 'Gnome' },
  greeting: String,
  favoriteFruit: String
});

module.exports = model('Gnome', gnomeSchema);
