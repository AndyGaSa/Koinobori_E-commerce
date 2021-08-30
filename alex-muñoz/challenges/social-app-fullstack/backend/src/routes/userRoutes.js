const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/users/:userId')
  .all()
  .get(userController.getOneById)
  .put(userController.updateOneById)
  .delete(userController.deleteOneById);

userRouter
  .route('/')
  .post(userController.createOne)
  .get(userController.getAll);

userRouter
  .route('/register')
  .all(passport.authenticate('signup', { session: false }))
  .post(userController.signUp);

userRouter
  .route('/login')
  .all(passport.authenticate('login', { session: false }))
  .post(userController.logIn);

userRouter
  .route('/protected')
  .all(passport.authenticate('jwt', { session: false }))
  .get(userController.protectedProfile);

module.exports = userRouter;
