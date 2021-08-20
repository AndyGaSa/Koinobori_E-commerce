const mongoose = require('mongoose');

const { Schema } = mongoose;
const favSitesSchema = Schema({
  user: { type: Schema.ObjectId, ref: 'User' },
  userSites: [{
    site: { type: Schema.ObjectId, ref: 'Sites' },
    amount: Number,
    fav: Boolean,
  }],
});
module.exports = mongoose.model('favSites', favSitesSchema);
