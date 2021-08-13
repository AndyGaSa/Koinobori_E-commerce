const User = require('../models/userModel');
const controller = require('./userController');

jest.mock('../models/beerModel');

describe('Given a getUser controller', () => {
  describe('When is trigered', () => {
    test('then call  send', async () => {
      const res = {
        send: jest.fn()
      };
      const req = { query: { beerName: ' ' } };
      User.find.mockResolvedValue({ });
      await controller.getUsers(req, res);

      expect(res.send).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { query: { beerName: ' ' } };

      User.find.mockRejectedValue();
      await controller.getUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a postUser controller', () => {
  describe('when is trigered', () => {
    test('then call  send', async () => {
      const res = { send: jest.fn() };
      const req = { body: { } };
      User.create.mockResolvedValue();
      await controller.postUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = {
        send: jest.fn(),
        status: jest.fn()
      };
      const req = { body: { } };

      User.create.mockRejectedValue();
      await controller.postUser(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a getOneUser controller', () => {
  test(' then getOneUser Should call res.send', () => {
    const res = { send: jest.fn() };
    const req = { params: { beerId: 11 } };

    controller.getOneUser(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a updateOneUser controller', () => {
  describe('when is trigered', () => {
    test('then call  send', async () => {
      const req = { params: { }, body: { } };
      const res = { json: jest.fn() };
      User.findByIdAndUpdate.mockResolvedValue();
      await controller.updateOneUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test('then call  rejected', async () => {
      const req = { params: { }, body: { } };
      const res = { send: jest.fn() };
      User.findByIdAndUpdate.mockRejectedValue();
      await controller.updateOneUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOneUser controller', () => {
  describe('when is trigered', () => {
    test('then call send', async () => {
      const res = { send: jest.fn() };
      const req = { beer: { } };
      User.aggregate.mockResolvedValue();
      await controller.deleteOneUser(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a findOneUser controller', () => {
  describe('when is trigered', () => {
    test('then call send', async () => {
      const res = { send: jest.fn() };
      const req = { params: { beer: { } } };
      const next = jest.fn();

      User.findById.mockResolvedValue();
      await controller.findOneUser(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    test('then call rejected', async () => {
      const res = { send: jest.fn(), status: jest.fn() };
      const req = { params: { beer: { } } };
      const next = jest.fn();
      User.findById.mockRejectedValue();
      await controller.findOneUser(req, res, next);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
