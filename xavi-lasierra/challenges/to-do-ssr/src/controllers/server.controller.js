/* eslint-disable no-underscore-dangle */
const { userCheck } = require('./users.controller');
const {
  getToDosDDBB,
  createToDoDDBB,
  updateToDoDDBB,
  deleteToDoDDBB
} = require('./toDos.controller');

async function mainPage(req, res) {
  try {
    const isAuthenticated = req.oidc.isAuthenticated();
    if (!isAuthenticated) {
      res.redirect('/restricted');
    }

    const user = await userCheck(req.oidc.user);
    const toDos = await getToDosDDBB(user._id);
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

async function addToDo({ oidc, body: { description } }, res) {
  try {
    if (description) {
      const user = await userCheck(oidc.user);
      await createToDoDDBB({ user: user._id, description });
    }
    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateToDo({ params: { toDoId }, body }, res) {
  try {
    await updateToDoDDBB(toDoId, body);

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteToDo({ params: { toDoId } }, res) {
  try {
    await deleteToDoDDBB(toDoId);

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function completeToDo({ params: { toDoId } }, res) {
  try {
    await updateToDoDDBB(toDoId, { completed: 'Completed' });

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function uncompleteToDo({ params: { toDoId } }, res) {
  try {
    await updateToDoDDBB(toDoId, { completed: 'ToDo' });

    res.redirect('/');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  mainPage,
  restricted,
  addToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
  uncompleteToDo
};
