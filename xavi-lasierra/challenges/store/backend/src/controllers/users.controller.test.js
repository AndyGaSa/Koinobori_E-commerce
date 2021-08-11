const userController = require('./users.controller');
const User = require('../models/user.model');

jest.mock('../models/User.model');
let req;
let res;

describe('Given a getUsers function', () => {
  describe('When is invoked', () => {
    describe('And find is resolved', () => {
      test('Then res.json should have been called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        User.find.mockResolvedValue({});

        await userController.getUsers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And find is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        User.find.mockRejectedValue({});

        await userController.getUsers(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a postUser function', () => {
  describe('When is invoked', () => {
    describe('And create is resolved', () => {
      beforeEach(async () => {
        req = { body: {} };
        res = {
          json: jest.fn(),
          status: jest.fn()
        };
        User.create.mockResolvedValue({});

        await userController.postUser(req, res);
      });

      test('Then res.json should have been called', async () => {
        expect(res.json).toHaveBeenCalled();
      });

      test('Then res.json should have been called', async () => {
        expect(res.status).toHaveBeenCalledWith(201);
      });
    });

    describe('And create is rejected', () => {
      beforeEach(async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn()
        };
        User.find.mockRejectedValue({});

        await userController.postUser(req, res);
      });

      test('Then res.status should have been called with an argument 500', async () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send should have been called', async () => {
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
