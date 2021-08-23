const Gnomo = require('../models/gnomo');

async function getAll({ query }, res) {
  try {
    const foundGnomos = await Gnomo.find(query)
      .populate({ path: 'friends', select: ['name', 'age', 'about'] })
      .populate({ path: 'adversaries', select: ['name', 'age', 'about'] });
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
    const findone = await Gnomo.findById(gnomoId)
      .populate({ path: 'friends', select: ['name', 'age', 'about'] })
      .populate({ path: 'adversaries', select: ['name', 'age', 'about'] });

    res.send(findone);
  } catch (error) {
    res.send(error);
  }
}

async function updateOneById({ params: { gnomoId }, body }, res) {
  try {
    const newGnomo = await Gnomo.findByIdAndUpdate(
      gnomoId,
      body,
      {
        new: true,
        useFindAndModify: false
      }

    );

    res.send(newGnomo);
  } catch (error) {
    res.send(304);
    res.send(error);
  }
}

async function addOneElementbyId({ params: { gnomoId }, body }, res) {
  try {
    const newGnomo = await Gnomo.findByIdAndUpdate(
      gnomoId,
      { $addToSet: body },
      {
        new: true,
        useFindAndModify: false
      }

    );

    res.send(newGnomo);
  } catch (error) {
    res.send(304);
    res.send(error);
  }
}

async function deleteById({ params: { gnomoId } }, res) {
  try {
    const gnomeDelete = Gnomo.findByIdAndDelete(gnomoId);

    res.status(204);
    res.send(gnomeDelete);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteById,
  addOneElementbyId
};
