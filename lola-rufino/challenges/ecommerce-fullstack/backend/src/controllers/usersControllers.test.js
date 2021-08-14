const controller = require('./usersControllers');
const User = require('../models/usersModel');

jest.mock('../models/usersModel');

describe('Given a getAllUsers function', () => {
  describe('When is triggered', () => {
    const req = { query: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send all users', async () => {
        User.find.mockResolvedValue({});

        await controller.getAllUsers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        User.find.mockRejectedValue({});

        await controller.getAllUsers(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a createOneUser function', () => {
  describe('When is triggered', () => {
    const req = { query: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send new user', async () => {
        User.create.mockResolvedValue({});

        await controller.createOneUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        User.create.mockRejectedValue({});

        await controller.createOneUser(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getOneUserById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} } };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send a user', async () => {
        User.findById.mockResolvedValue({});

        await controller.getOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        User.findById.mockRejectedValue({});

        await controller.getOneUserById(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateOneUserById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} }, body: {} };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send an updated user', async () => {
        User.findByIdAndUpdate.mockResolvedValue({});

        await controller.updateOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        User.findByIdAndUpdate.mockRejectedValue({});

        await controller.updateOneUserById(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteOneUserById function', () => {
  describe('When is triggered', () => {
    const req = { params: { userId: {} } };
    const res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
    describe('And is resolved', () => {
      test('Should send an deleted user', async () => {
        User.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Should send status', async () => {
        User.findByIdAndDelete.mockRejectedValue({});

        await controller.deleteOneUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(418);
      });
    });
  });
});
