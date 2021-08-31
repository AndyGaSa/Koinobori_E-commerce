const { Router } = require('express');
const passport = require('passport');
const {
  getAll, getById, updateOneById, deleteOneById
} = require('../controllers/cartControllers');

const cartRouter = new Router();

cartRouter
  .route('/')
  .all(passport.authenticate('signup', { session: false }))
  .get(getAll);

cartRouter
  .route('/:userCart')
  .get(getById)
  .put(updateOneById)
  .delete(deleteOneById);

module.exports = cartRouter;
