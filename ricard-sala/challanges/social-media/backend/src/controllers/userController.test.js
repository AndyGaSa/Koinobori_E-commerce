const userController = require('./userController');
const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('given a CreateOne ', () => {
  let req;
  let res;
  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
  });
  describe('when is invoked', () => {
    describe('and resolve', () => {
      test('then res.json is called', async () => {
        User.create.mockResolvedValue({ name: 'pepe' });

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('then res.status with 500', async () => {
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        User.create.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.createOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('given a getAll ', () => {
  let req;
  let res;
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
  describe('when is triggered', () => {
    describe('and find resolved', () => {
      test('then res.json is called', async () => {
        User.find.mockResolvedValue({});

        await userController.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.getAll rejects', () => {
      test('then res.status with 500', async () => {
        User.find.mockRejectedValue();

        await userController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
    describe('And User.getAll rejects', () => {
      test('Then res.send is called with CREATE_ERROR', async () => {
        User.find.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.getAll(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});
