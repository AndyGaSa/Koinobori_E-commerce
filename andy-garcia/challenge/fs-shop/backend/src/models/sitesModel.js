const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = Schema({
  name: String,
  price: Number,
  stock: Number,
  distance: Number,
  pictures: [{ url: String }],
});
module.exports = mongoose.model('Sites', productSchema);

var filteredArray  = sites.filter((site) => userSites.filter((asd) => asd.site === site._id).length == 0);