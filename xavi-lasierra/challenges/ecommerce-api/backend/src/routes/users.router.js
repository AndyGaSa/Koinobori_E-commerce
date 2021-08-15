const { Router } = require('express');
const {
  getCreateUser,
  getAllUsers
} = require('../controllers/users.controller');

const productsRouter = Router();

productsRouter
  .route('/')
  .get(getAllUsers)
  .post(getCreateUser);

module.exports = productsRouter;
