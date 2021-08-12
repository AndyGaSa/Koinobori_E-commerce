function getAll(req, res) {
  res.send('getAll works');
}

function createOne(req, res) {
  res.send('createOne works');
}

function getOneById(req, res) {
  res.send('getOneById works');
}

function updateOneById(req, res) {
  res.send('updateOneById works');
}

function deleteOneById(req, res) {
  res.send('deleteOneById works');
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
};
