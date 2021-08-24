const userController = require('./userController');
const User = require('../models/userModel');

jest.mock('../models/userModel');
let req;
let res;

beforeEach(() => {
  res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn()
  };
});

describe('Given a createOne', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
    });
    describe('And resolves', () => {
      test('Then res.json is called', async () => {
        User.create.mockResolvedValue({ name: 'pepe' });

        await userController.createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status with 500', async () => {
        User.create.mockRejectedValue();

        await userController.createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });

    test('Then res.send is called with "CREATE_ERROR"', async () => {
      User.create.mockRejectedValue(new Error('CREATE_ERROR'));

      await userController.createOne(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
    });
  });
});

describe('Given a getAll function', () => {
  describe('When the function is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
    });
    describe('And its resolved', () => {
      test('Then res.json is called', async () => {
        User.find.mockResolvedValue({ name: 'pepe' });
        await userController.getAll(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then res status is called with 500', async () => {
        User.find.mockRejectedValue();
        await userController.getAll(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with "CREATE_ERROR"', async () => {
        User.find.mockRejectedValue(new Error('CREATE_ERROR'));

        await userController.getAll(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
      });
    });
  });
});

describe('Given a getOneById function', () => {
  describe('When the function is invoked', () => {
    beforeEach(() => {
      req = {
        params: { userId: '5124543414512' }
      };
    });
    describe('And its resolved', () => {
      test('Then res.json is called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue({ name: 'pepe' })
          })
        });

        await userController.getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then res status is called with 500', async () => {
        User.findById.mockRejectedValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockRejectedValue({ name: 'pepe' })
          })
        });
        await userController.getOneById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with "FIND_BY_ID_ERROR"', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockRejectedValue(new Error('FIND_BY_ID_ERROR'))
          })
        });

        await userController.getOneById(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_BY_ID_ERROR');
      });
    });
  });
});

describe('Given a updateOneById', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: 'lkj12hg3kj1h2gk3j1h2g' }
      };
    });
    describe('And resolves', () => {
      test('Then res.json is called', async () => {
        User.findByIdAndUpdate.mockResolvedValue();

        await userController.updateOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndUpdate rejects', () => {
      test('Then res.status with 500', async () => {
        User.findByIdAndUpdate.mockRejectedValue();

        await userController.updateOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });

    test('Then res.send is called with "findByIdAndUpdate_ERROR"', async () => {
      User.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

      await userController.updateOneById(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
    });
  });
});

describe('Given a DeleteOneById', () => {
  describe('When is invoked', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: {}
      };
    });
    describe('And resolves', () => {
      test('Then res.status is called', async () => {
        User.findByIdAndDelete.mockResolvedValue();

        await userController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
      test('Then res.json is called', async () => {
        User.findByIdAndDelete.mockResolvedValue();

        await userController.deleteOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndDelete rejects', () => {
      test('Then res.status with 500', async () => {
        User.findByIdAndDelete.mockRejectedValue();

        await userController.deleteOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });

    test('Then res.send is called with "findByIdAndDelete_ERROR"', async () => {
      User.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

      await userController.deleteOneById(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
    });
  });
});
