const usersController = require('./usersController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

let req;
let res;

describe('Given a createOneUser function', () => {
  describe('When invoked with properties req and res', () => {
    req = { body: {} };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    describe('And it resolves', () => {
      User.create.mockResolvedValue({});
      usersController.createOneUser(req, res);

      test('Then it should call function', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And it fails', () => {
      User.create.mockRejectedValue({});
      usersController.createOneUser(req, res);

      test('Then it should call error 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getAllUsers function', () => {
  describe('When invoked with properties req and res', () => {
    req = { body: {} };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    describe('And if it resolves', () => {
      User.find.mockResolvedValue({});
      usersController.getAllUsers(req, res);

      test('Then it should call function', () => {
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And if it fails', () => {
      User.find.mockRejectedValue({});
      usersController.getAllUsers(req, res);

      test('Then it should call error 500', () => {
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });

  describe('Given a getUserById function', () => {
    req = {
      params: { userId: '3424564575474' }
    };
    describe('When invoked with properties req and res', () => {
      describe('And if it resolves', () => {
        User.findById.mockReturnValue({
          populate: jest.fn()
            .mockReturnValue({
              populate: jest.fn()
                .mockResolvedValue({ name: 'Pepe' })
            })
        });
        usersController.getUserById(req, res);

        test('Then it should call function', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And if it fails', () => {
        User.findById.mockRejectedValue({});
        usersController.getUserById(req, res);

        test('Then it should call error 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
      });
    });
  });
});
