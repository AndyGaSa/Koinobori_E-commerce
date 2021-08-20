const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given createOne', () => {
  describe('When is Invoked', () => {
    describe('And resolved', () => {
      test('Then res.json is called', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockResolvedValue({
          name: 'pepe'
        });

        await userController.createOne(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status with 500', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.createOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});
