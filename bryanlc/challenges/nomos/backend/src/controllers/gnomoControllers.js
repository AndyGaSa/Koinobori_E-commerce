const Gnomo = require('../models/gnomo');

async function getAll({ query }, res) {
  try {
    const foundGnomos = await Gnomo.find(query);
    return res.send(foundGnomos);
  } catch (error) {
    return res.send(error);
  }
}

async function createOne(req, res) {
  const newGnomo = await Gnomo.create(req.body);
  res.status(201);
  res.send(newGnomo);
}

async function getOneById({ params: { gnomoId } }, res) {
  try {
    const findone = await Gnomo.findById(gnomoId);

    res.send(findone);
  } catch (error) {
    res.send(error);
  }
}

async function updateOneById({ params: { gnomoId }, body }, res) {
  const newGnomo = await Gnomo.findByIdAndUpdate(
    gnomoId,
    body,
    {
      new: true,
      useFindAndModify: false
    }

  );

  res.send(newGnomo);
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById
};
