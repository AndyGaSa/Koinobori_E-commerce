const { Router } = require('express');
const gnomoControllers = require('../controllers/gnomoControllers');

const gnomoRouter = Router();

gnomoRouter.route('/')
  .post(gnomoControllers.createOne)
  .get(gnomoControllers.getAll);

gnomoRouter
  .route('/:gnomoId')
  .get(gnomoControllers.getOneById)
  .put(gnomoControllers.updateOneById)
  .patch(gnomoControllers.addOneElementbyId)
  .delete(gnomoControllers.deleteById);

module.exports = gnomoRouter;
