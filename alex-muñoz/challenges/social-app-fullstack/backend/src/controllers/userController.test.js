const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');
let req;
let res;
describe('Given a createOne', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And resolves', () => {
      test('Then res.json is called', async () => {
        User.create.mockResolvedValue({ name: 'pepe' });

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status with 500', async () => {
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });

    test('Then res.send is called with "CREATE_ERROR"', async () => {
      User.create.mockRejectedValue(new Error('CREATE_ERROR'));

      await userController.createOne(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
    });
  });
});

describe('Given a getAll function', () => {
  describe('When the function is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And its resolved', () => {
      test('Then res.json is called', async () => {
        User.find.mockResolvedValue({ name: 'pepe' });
        await userController.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then res status is called with 500', async () => {
        User.find.mockRejectedValue();
        await userController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with "CREATE_ERROR"', async () => {
        User.find.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.getAll(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});
