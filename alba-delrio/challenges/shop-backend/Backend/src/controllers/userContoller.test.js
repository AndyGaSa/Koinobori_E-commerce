const User = require('../models/userModel');
const controller = require('./userController');

jest.mock('../models/userModel');

describe('Given a createUser controller', () => {
  describe('When is trigered', () => {
    test('then call  send', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn(),
        json: null
      };
      const req = { body: { newUSer: ' ' } };
      User.create.mockResolvedValue({ });
      await controller.createUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
