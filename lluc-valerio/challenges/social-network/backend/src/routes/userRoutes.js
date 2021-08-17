const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getAll)
  .post(userController.createOne);
userRouter
  .route('/:userId')
  .get((req, res) => res.send('get on root with Id'))
  .post((req, res) => res.send('post on root with Id'));

module.exports = userRouter;
