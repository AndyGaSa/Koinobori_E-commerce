const controller = require('./usersControllers');
const Users = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given getUsers', () => {
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then getUsers should call res.send', async () => {
        const req = { query: {} };
        const res = { send: jest.fn(), status: jest.fn() };

        Users.find.mockResolvedValue({});
        await controller.getUsers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then getUsers should call res.send', async () => {
        const req = { query: {} };
        const res = { send: jest.fn(), status: jest.fn() };

        Users.find.mockRejectedValue();
        await controller.getUsers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given postUsers', () => {
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then postUsers should call res.json', async () => {
        const req = { body: {} };
        const res = { send: jest.fn(), status: jest.fn() };

        Users.create.mockResolvedValue();
        await controller.postUsers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then postUsers should call res.send', async () => {
        const req = { body: {} };
        const res = { send: jest.fn(), status: jest.fn(), json: {} };

        Users.create.mockRejectedValue();
        await controller.postUsers(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
