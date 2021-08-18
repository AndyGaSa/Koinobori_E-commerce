const User = require('../models/userModel');
const controllers = require('./userControllers');

jest.mock('../models/userModel');

describe('Given a getAll function', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
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

    describe('And find rejects', () => {
      test('Then call status 500', async () => {
        const req = {
          query: jest.fn()
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        User.find.mockRejectedValue();

        await controllers.getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a createOne function', () => {
  describe('When is triggered', () => {
    describe('And find resolved', () => {
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

    describe('And create rejected', () => {
      test('Then call status with 500', async () => {
        const req = {
          body: {}
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        User.create.mockRejectedValue();

        await controllers.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getById function', () => {
  describe('When is triggered', () => {
    describe('And findById respons', () => {
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

    describe('And findById reject', () => {
      test('Then call status with 500', async () => {
        const req = {
          query: jest.fn()
        };
        const res = {
          json: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };

        User.findById.mockRejectedValue();

        await controllers.getById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a updatedOneById', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndUpdate response', () => {
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
    describe('And findByIdAndUpdate reject', () => {
      test('Then call status with 500', async () => {
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
        User.findByIdAndUpdate.mockRejectedValue();

        await controllers.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteOneById function', () => {
  describe('When is triggered', () => {
    describe('And findByIdAndDelete response', () => {
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
    describe('And findByIdAndDelete reject', () => {
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
        User.findByIdAndDelete.mockRejectedValue();

        await controllers.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
