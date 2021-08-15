const User = require('../models/userModel');
const controllers = require('./userControllers');

jest.mock('../models/userModel');

describe('Given a getAll function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: jest.fn()
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      User.find.mockResolvedValue();

      await controllers.getAll(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a createOne function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        body: {}
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      User.find.mockResolvedValue({});

      await controllers.createOne(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getById function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: {
          userId: {}
        }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      User.findById.mockResolvedValue({});

      await controllers.getById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updatedOneById', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: {
          userId: {}
        },
        body: {}
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      User.findByIdAndUpdate.mockResolvedValue({});

      await controllers.updateOneById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteOneById function', () => {
  describe('When is triggered', () => {
    test('Then call json', async () => {
      const req = {
        query: {
          userId: {}
        }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      User.findByIdAndDelete.mockResolvedValue({});

      await controllers.deleteOneById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
