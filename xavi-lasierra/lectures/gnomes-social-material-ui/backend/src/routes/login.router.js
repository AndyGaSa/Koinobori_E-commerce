const { Router } = require('express');
const {
  loginGnome
} = require('../controllers/login.controller');

const loginRouter = Router();

loginRouter
  .route('/')
  .get(loginGnome);

module.exports = loginRouter;
