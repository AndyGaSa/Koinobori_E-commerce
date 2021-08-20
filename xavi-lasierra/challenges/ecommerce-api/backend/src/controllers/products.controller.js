const Product = require('../models/product.model');

function transformQuery(query) {
  let transformedQuery = {};
  const entries = Object.entries(query);
  if (entries.length > 0) {
    entries.forEach(([property, filter]) => {
      if (property.includes('_')) {
        const [propertyName, symbol] = property.split('_');
        transformedQuery = { ...transformedQuery, [propertyName]: { [`$${symbol}`]: filter } };
      } else {
        transformedQuery = { ...transformedQuery, [property]: { $regex: filter, $options: 'i' } };
      }
    });
  }
  return transformedQuery;
}

async function getAllProducts({ query }, res) {
  try {
    const newQuery = transformQuery(query);
    const foundProducts = await Product.find(newQuery);
    res.json(foundProducts);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createProduct({ body }, res) {
  try {
    const newProduct = await Product.create(body);
    res.status(201);
    res.json(newProduct);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getRandomProduct({ query }, res) {
  try {
    const randomProduct = await Product.aggregate().match(query).sample(1);
    return res.json(randomProduct);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getRandomProduct
};
