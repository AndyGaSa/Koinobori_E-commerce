function getToDos(req, res) {
  const foundToDos = ['hola'];

  return res.send(foundToDos);
}

module.exports = {
  getToDos
};
