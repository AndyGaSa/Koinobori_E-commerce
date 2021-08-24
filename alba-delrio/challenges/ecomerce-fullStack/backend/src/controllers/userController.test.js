const User = require('../models/userModel');
const controller = require('./userController');

jest.mock('../models/userModel');

describe('Given a CreateUser controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn(),
      json: jest.fn()
    };
    const req = { body: { newUSer: ' ' } };

    test('then call send', async () => {
      User.create.mockResolvedValue({ });
      await controller.createUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('then call rejected', async () => {
      User.create.mockRejectedValue({ });
      await controller.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a DeleteUser controller', () => {
  describe('when is trigered', () => {
    const res = {
      send: jest.fn(),
      status: jest.fn()
    };
    const req = { params: { _id: ' ' } };

    test('then call send', async () => {
      User.findByIdAndDelete.mockResolvedValue();
      await controller.deleteUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('then call rejected', async () => {
      User.findByIdAndDelete.mockRejectedValue({ });
      await controller.deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
