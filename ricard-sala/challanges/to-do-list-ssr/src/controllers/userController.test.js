const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a createUser function', () => {
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
  describe('When is rejected', () => {
    test('Then res.send should have been called with an error "error"', async () => {
      User.create.mockRejectedValue(new Error('error'));
      await userController.createUser(req, res);

      expect(res.send.mock.calls[1][0].message).toBe('error');
    });
  });
});
