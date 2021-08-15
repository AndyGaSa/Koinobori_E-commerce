const Client = require('../models/clientModel');

async function getClient({ query }, res) {
  try {
    const foundClient = await Client.find(query);
    res.json(foundClient);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function findOneClient(req, res, next) {
  const { ClientId } = req.params;
  console.log('find');
  try {
    const client = await Client.findById(ClientId);

    if (client) {
      req.client = client;
      next();
    } else {
      res.status(404);
      res.send(new Error(`There is no client with id ${ClientId}`));
    }
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function getOneClient({ client }, res) {
  return res.send(client);
}

async function createClient({ body }, res) {
  try {
    const createdClient = await Client.create(body);
    res.send(createdClient);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getClient,
  findOneClient,
  getOneClient,
  createClient,
};
