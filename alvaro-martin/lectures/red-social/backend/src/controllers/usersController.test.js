const userController = require('./usersController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given createOne()', () => {
  describe('when in invoked', () => {
    describe('And User.create resolves', () => {
      test('Then res.json is called', async () => {
        const req = {
          body: {},
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        User.create.mockResolvedValue({ name: 'alvaro' });
        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status with 500', async () => {
        const req = {
          body: {},
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        User.create.mockRejectedValue({ name: 'alvaro' });
        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
