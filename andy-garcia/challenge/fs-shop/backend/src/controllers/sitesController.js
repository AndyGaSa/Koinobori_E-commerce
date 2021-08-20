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

const deleteSiteById = async ({ params: { siteid } }, res) => {
  const { deletedCount } = await Sites.deleteOne({ _id: siteid });
  res.send(!deletedCount ? `No se pudo eliminar ${siteid}` : `${siteid} Eliminado correctamente`);
};

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
  createSite,
  getAllSites,
  deleteSiteById,
  updateSite,
};
