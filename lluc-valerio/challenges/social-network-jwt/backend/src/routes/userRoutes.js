const { Router } = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get(
  '/',
  passport.authenticate('signup', { session: false }),
  userController.getAll
);

// userRouter
//   .route('/')
//   .get(
//     passport.authenticate('signup', { session: false }),
//     userController.getAll
//   )
//   .post(userController.createOne);
userRouter
  .route('/:userId')
  .get(userController.getOneById)
  .delete(userController.deleteOneById)
  .put(userController.updateOneById);

module.exports = userRouter;
