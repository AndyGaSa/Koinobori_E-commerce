const { Router } = require('express'); // Import Router object.
const userController = require('../controllers/userController');

const userRouter = new Router(); // Create Router object.

userRouter.route('/')
  . get(userController.readAll);

userRouter.route('/:id')
  .all(userController.readOne)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.delete);

module.exports = userRouter;
