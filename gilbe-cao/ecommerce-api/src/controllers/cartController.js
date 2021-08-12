function getAll(req, res) {
  res.send('getAll works');
}
function createOne(req, res) {
  res.send('createOne works');
}
function getOneById(req, res) {
  res.send('getOneById works');
}

module.exports = {
  getAll,
  createOne,
  getOneById,
};
