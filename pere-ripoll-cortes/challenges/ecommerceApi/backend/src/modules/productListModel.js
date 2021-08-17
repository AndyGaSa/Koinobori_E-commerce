const mongoose = require('mongoose');

const productListSchema = mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  img: {
    type: String,
    default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.memegenerator.es%2Fmeme%2F17808901&psig=AOvVaw0f3FLM5tEoeskts7GAx28F&ust=1629020491856000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCv3LmcsPICFQAAAAAdAAAAABAJ',
  },
  description: String,
});

module.exports = mongoose.model('Product', productListSchema);
