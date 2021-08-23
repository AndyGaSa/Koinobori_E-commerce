const User = require('../models/userModel');
const userController = require('./userController');

jest.mock('../models/userModel');

describe('userController', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('Given postOne', () => {
    beforeEach(() => {
      req = {
        body: {},
      };
    });
    describe('When is invoked', () => {
      describe('And resolves', () => {
        test('Then res.json is called', async () => {
          User.create.mockResolvedValue({ name: 'Pablo' });
          await userController.postOne(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.create rejects', () => {
        test('Then res.status with 500', async () => {
          User.create.mockRejectedValue();
          await userController.postOne(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then res.send is called with CREATE_ERROR', async () => {
          User.create.mockRejectedValue(new Error('CREATE_ERROR'));
          await userController.postOne(req, res);
          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });

  describe('Given getAll', () => {
    req = {
      query: {},
    };
    describe('When is invoked', () => {
      describe('And resolves', () => {
        test('Then res.json is called', async () => {
          User.find.mockResolvedValue({ name: 'Pablo' });

          await userController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.find rejects', () => {
        test('Then res.status with 500', async () => {
          User.find.mockRejectedValue();

          await userController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then res.send is called', async () => {
          User.find.mockRejectedValue(new Error('CREATE_ERROR'));
          await userController.getAll(req, res);
          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });
});
