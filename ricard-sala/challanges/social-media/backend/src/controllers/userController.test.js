const userController = require('./userController');
const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('given a CreateOne ', () => {
  describe('when is invoked', () => {
    describe('and resolve', () => {
      test('then res.json is called', async () => {
        const req = {
          body: {},
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        User.create.mockResolvedValue({ name: 'pepe' });

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('then res.status with 500', async () => {
        const req = {
          body: {},
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn(),
        };
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
