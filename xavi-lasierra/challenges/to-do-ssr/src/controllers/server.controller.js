/* eslint-disable no-underscore-dangle */
const { userCheck } = require('./users.controller');
const {
  getToDos,
  createToDo
} = require('./toDos.controller');

async function mainPage(req, res) {
  try {
    const isAuthenticated = req.oidc.isAuthenticated();
    if (!isAuthenticated) {
      res.redirect('/restricted');
    }

    const user = await userCheck(req.oidc.user);
    const toDos = await getToDos(user._id);
    console.log(toDos);
    res.render('index', { isAuthenticated, user, toDos });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function restricted(req, res) {
  const isAuthenticated = req.oidc.isAuthenticated();
  if (isAuthenticated) {
    res.redirect('/');
  }
  res.render('restricted', { isAuthenticated });
}

async function addToDo(req, res) {
  try {
    const user = await userCheck(req.oidc.user);
    await createToDo({ user: user._id, description: req.body.newTodo });
    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  mainPage,
  restricted,
  addToDo
};
