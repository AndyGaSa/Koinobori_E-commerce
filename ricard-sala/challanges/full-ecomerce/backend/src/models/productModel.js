const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  img: {
    type: String,
    default: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fsitech.co.id%2Fassets%2Fimg%2Fproducts%2Fdefault.jpg&imgrefurl=http%3A%2F%2Fsitech.co.id%2Fdetail%2F49&tbnid=gXnVW18IF1IdeM&vet=12ahUKEwjB-vjWn7DyAhUM4oUKHU8UBpIQMygDegUIARCgAQ..i&docid=77OdABaDBGthWM&w=500&h=333&q=product%20default&client=safari&ved=2ahUKEwjB-vjWn7DyAhUM4oUKHU8UBpIQMygDegUIARCgAQ',
  },
  price: String,
  stock: Number,

});

module.exports = mongoose.model('Product', productSchema);
