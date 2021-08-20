const userController = require('./userController');
const User = require('../models/usersModel');

jest.mock('../models/usersModel');

describe('Given a createOne fn', () => {
  const req = {
    body: {},
  };
  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };

  describe('When is invoked', () => {
    test('Should call res.json', async () => {
      User.create.mockResolvedValue();
      await userController.createUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When is rejected', () => {
    test('Should call res.status(500)', async () => {
      User.create.mockRejectedValue();
      await userController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
