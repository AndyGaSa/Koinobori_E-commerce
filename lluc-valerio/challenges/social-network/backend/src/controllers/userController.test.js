const User = require('../models/userModel');
const userController = require('./userController');

jest.mock('../models/userModel');

describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {
        query: {}
      };
      res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And user.find resolves', () => {
      test('Then res.json must be called', async () => {
        User.find.mockResolvedValue({});

        await userController.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user.find rejects', () => {
      test('Then res.send must be called', async () => {
        User.find.mockRejectedValue({});

        await userController.getAll(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a createOne function', () => {
  describe('When is invoked', () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And user.create resolves', () => {
      test('Then res.json must be called', async () => {
        User.create.mockResolvedValue({});

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user.create rejects', () => {
      test('Then res.send must be called', async () => {
        User.create.mockRejectedValue({});

        await userController.createOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getOne function', () => {
  describe('When is invoked', () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {
        params: {
          userId: {}
        }
      };
      res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And user.findById resolves', () => {
      test('Then res.json must be called', async () => {
        User.findById.mockResolvedValue({});

        await userController.getOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user.findById rejects', () => {
      test('Then res.send must be called', async () => {
        User.findById.mockRejectedValue({});

        await userController.getOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteOne function', () => {
  describe('When is invoked', () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {
        params: {
          userId: {}
        }
      };
      res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And user.findByIdAndDelete resolves', () => {
      test('Then res.json must be called', async () => {
        User.findByIdAndDelete.mockResolvedValue({});

        await userController.deleteOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user.findByIdAndDelete rejects', () => {
      test('Then res.send must be called', async () => {
        User.findByIdAndDelete.mockRejectedValue({});

        await userController.deleteOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateOne function', () => {
  describe('When is invoked', () => {
    let req = {};
    let res = {};
    beforeEach(() => {
      req = {
        body: {},
        params: {
          userId: {}
        }
      };
      res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And user.findByIdAndUpdate resolves', () => {
      test('Then res.json must be called', async () => {
        User.findByIdAndUpdate.mockResolvedValue({});

        await userController.updateOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user.findByIdAndUpdate rejects', () => {
      test('Then res.send must be called', async () => {
        User.findByIdAndUpdate.mockRejectedValue({});

        await userController.updateOne(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
