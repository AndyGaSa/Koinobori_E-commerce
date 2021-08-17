const userController = require('./userControllers');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    describe('And User.find resolves', () => {
      test('Then res.json to have been called', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.find.mockResolvedValue({});

        await userController.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And User.find rejects', () => {
      test('Then res.status to have been called with 500', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.find.mockRejectedValue();

        await userController.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send to have been called with THERE_WAS_AN_ERROR', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.find.mockRejectedValue(new Error('THERE_WAS_AN_ERROR'));

        await userController.getAll(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('THERE_WAS_AN_ERROR');
      });
    });
  });
});

describe('Given a createOne function', () => {
  describe('When is invoked', () => {
    describe('And User.create resolves', () => {
      test('Then res.json to have been called', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockResolvedValue({ name: ' ' });

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And User.create rejects', () => {
      test('Then res.status to have been called with 500', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send to have been called with THERE_WAS_AN_ERROR', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.create.mockRejectedValue(new Error('THERE_WAS_AN_ERROR'));

        await userController.createOne(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('THERE_WAS_AN_ERROR');
      });
    });
  });
});

describe('Given a getById function', () => {
  describe('When is invoked', () => {
    describe('And User.findById resolves', () => {
      test('Then res.json to have been called', async () => {
        const req = {
          params: { userId: {} }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockResolvedValue({})
        });

        await userController.getById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And User.findById rejects', () => {
      test('Then res.status to have been called with 500', async () => {
        const req = {
          params: { userId: {} }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue()
        });

        await userController.getById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send to have been called with THERE_WAS_AN_ERROR', async () => {
        const req = {
          params: { userId: {} }
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error('THERE_WAS_AN_ERROR'))
        });

        await userController.getById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('THERE_WAS_AN_ERROR');
      });
    });
  });
});

describe('Given a updateOneById function', () => {
  describe('When is invoked', () => {
    describe('And User.create resolves', () => {
      test('Then res.json to have been called', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' },
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndUpdate.mockResolvedValue({});

        await userController.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('And User.create rejects', () => {
      test('Then res.status to have been called with 500', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' },
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndUpdate.mockRejectedValue();

        await userController.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send to have been called with THERE_WAS_AN_ERROR', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' },
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndUpdate.mockRejectedValue(new Error('THERE_WAS_AN_ERROR'));

        await userController.updateOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('THERE_WAS_AN_ERROR');
      });
    });
  });
});

describe('Given a deleteOneById function', () => {
  describe('When is invoked', () => {
    describe('And User.findByIdAndDelete resolves', () => {
      test('Then res.json to have been called', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' }
        };
        const res = {
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndDelete.mockResolvedValue({});

        await userController.deleteOneById(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });

    describe('And User.deleteOneById rejects', () => {
      test('Then res.status to have been called with 500', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' }
        };
        const res = {
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndDelete.mockRejectedValue();

        await userController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });

      test('Then res.send to have been called with THERE_WAS_AN_ERROR', async () => {
        const req = {
          params: { userId: '611bc0fdfb494626089ae7a6' }
        };
        const res = {
          status: jest.fn(),
          send: jest.fn()
        };
        User.findByIdAndDelete.mockRejectedValue(new Error('THERE_WAS_AN_ERROR'));

        await userController.deleteOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('THERE_WAS_AN_ERROR');
      });
    });
  });
});
