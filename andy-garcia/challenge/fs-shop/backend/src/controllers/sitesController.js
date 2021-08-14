const Sites = require('../models/sitesModel');

async function createSite({ body }, res) {
  try {
    const reqName = await Sites.findOne({ name: body.name }).exec();
    if (reqName) {
      throw new Error('Ya existe un sitio con ese nombre');
    }
    const newSite = await Sites.create(body);
    return res.send(newSite);
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.send(error.message);
  }
}

async function getAllSites(req, res) {
  try {
    const SitesItems = await Sites.find();
    res.json(SitesItems);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function deleteSite({ params: { siteid } }, res) {
  Sites.findByIdAndDelete(siteid).exec();
  res.send('El sitio ha sido eliminado');
}
async function updateSite(req, res, next) {
  const { beerId } = req.params;
  const beer = await Sites.findOne({ id: +beerId }).exec();
  try {
    req.beer = beer;
    next();
  } catch (error) {
    res.status(404);
    res.send(new Error(`There is no beer with id ${beerId}`));
  }
}

module.exports = {
  createSite, getAllSites, deleteSite, updateSite,
};
