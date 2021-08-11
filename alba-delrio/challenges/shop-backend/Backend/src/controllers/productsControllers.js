const Product = require('../models/userModel');

async function getProduct({ query }, res) {
  try {
    const foundProduct = await Product.find(query);
    return res.send(foundProduct);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There are no beers'));
  }
}

async function updateProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);

    return res.send(newProduct);
  } catch (error) {
    res.status(404);
    return res.send(new Error('The user has not been created'));
  }
}
async function findOneProduct(req, res, next) {
  const { beerId } = req.params;

  try {
    const user = await Product.findById({ id: +beerId });
    req.user = user;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no user with id ${beerId}`));
  }
}

async function deleteProduct({ Product }, res) {
  const { _id } = Product;

  await Product.findByIdAndDelete({ _id });
  return res.send(`The Product ${Product.name} has been deleted`);
}

module.exports = {
  getProduct,
  updateProduct,
  findOneProduct,
  deleteProduct

};
