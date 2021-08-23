const User = require('../models/userModel');
const usersController = require('./usersController');

jest.mock('../models/userModel');

let req;
let res;
describe('Given a postUser function', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        query: {},
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
    });
    describe('And User.create resolves', () => {
      test('Then res.json should be called', async () => {
        User.create.mockResolvedValue({ name: 'Riki' });
        await usersController.postUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status should be 500', async () => {
        User.create.mockRejectedValue();
        await usersController.postUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
describe('Given a getAllUsers function', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        query: {},
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
    });
    describe('And User.find resolves', () => {
      test('then res.json should be called', async () => {
        User.find.mockResolvedValue();
        await usersController.getAllUsers(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.find is rejected', () => {
      test('Then res.status should be 404', async () => {
        User.find.mockRejectedValue();
        await usersController.getAllUsers(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
  });
});
describe('Given a getOneUser function', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: 'dfasdfa' },
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
    });
    describe('And User.findById resolves', () => {
      test('then res.json should be called', async () => {
        User.findById
          .mockReturnValue({
            populate: jest.fn().mockResolvedValue({ name: 'pere' }),
          });
        await usersController.getOneUser(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findById is rejected', () => {
      test('Then res.status should be 404', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue(),
        });
        await usersController.getOneUser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
