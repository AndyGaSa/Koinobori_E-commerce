const controller = require('./userControllers');
const User = require('../models/userModel');

jest.mock('../models/userModel');

let req;
let res;

describe('Given a function getAllUsers', () => {
  beforeEach(() => {
    req = { body: { query: jest.fn() }, params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then should call json', async () => {
        User.find.mockResolvedValue({});

        await controller.getAllUsers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then should call status', async () => {
        User.find.mockRejectedValue(null);

        await controller.getAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a function createUser', () => {
  beforeEach(() => {
    req = { body: { query: jest.fn() }, params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then should call json', async () => {
        User.create.mockResolvedValue({});

        await controller.createUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then should call status', async () => {
        User.create.mockRejectedValue();

        await controller.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a function getOneUserById', () => {
  beforeEach(() => {
    req = { body: { query: jest.fn() }, params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then should call json', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue({})
          })
        });

        await controller.getOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then should call status', async () => {
        User.findById.mockRejectedValue();

        await controller.getOneUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a function updateUserById', () => {
  beforeEach(() => {
    req = { body: {}, params: { userId: '' } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then should call json', async () => {
        User.findByIdAndUpdate.mockResolvedValue({});

        await controller.updateUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then should call status', async () => {
        User.findByIdAndUpdate.mockRejectedValue();

        await controller.updateUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a function deleteUserById', () => {
  beforeEach(() => {
    req = { body: { query: jest.fn() }, params: { userId: null } };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then should call json', async () => {
        User.findByIdAndDelete.mockResolvedValue({});

        await controller.deleteUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then should call status', async () => {
        User.findByIdAndDelete.mockRejectedValue();

        await controller.deleteUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
