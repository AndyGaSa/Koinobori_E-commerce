const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.route('/')
  .get(userController.readAllUsers)
  .post(userController.createOneUser);

userRouter.route('/userId')
  .all(userController.searchOneUser)
  .get(userController.readOneUser)
  .put(userController.updateOneUser)
  .delete(userController.deleteOneUser);

module.exports = userRouter;
