const userController = require('./usersController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('UserController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given createOneUser', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
    });
    describe('When is invoked', () => {
      describe('And User.create resolves', () => {
        test('Then res.json is called', async () => {
          User.create.mockResolvedValue({ name: 'pepe' });

          await userController.createOneUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.create rejects', () => {
        test('Then res.status with 500', async () => {
          User.create.mockRejectedValue();

          await userController.createOneUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          User.create.mockRejectedValue(new Error('CREATE_ERROR'));

          await userController.createOneUser(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });

  describe('Given getAllUsers', () => {
    beforeEach(() => {
      req = {
        query: {}
      };
    });
    describe('When is invoked', () => {
      describe('And User.find resolves', () => {
        test('Then res.json is called', async () => {
          User.find.mockResolvedValue({ name: 'pepe' });

          await userController.getAllUsers(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.find rejects', () => {
        test('Then res.status with 500', async () => {
          User.find.mockRejectedValue();

          await userController.getAllUsers(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          User.find.mockRejectedValue(new Error('FIND_ERROR'));

          await userController.getAllUsers(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });

  describe('Given getUserById', () => {
    beforeEach(() => {
      req = {
        params: { userId: 'i71283716283761827361827' }
      };
    });

    describe('When is invoked', () => {
      describe('And User.findById resolves', () => {
        test('Then res.json is called', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockResolvedValue({
                    name: 'pepe',
                    friends: [{ name: 'lola' }],
                    adversaries: [{ name: 'nacho' }]
                  })
              })
            });

          await userController.getUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.getUserById rejects', () => {
        test('Then res.status with 500', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockRejectedValue()
              })
            });

          await userController.getUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          User.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn().mockRejectedValue(new Error('FINDBYID_ERROR'))
              })
            });

          await userController.getUserById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FINDBYID_ERROR');
        });
      });
    });
  });

  describe('Given updateUserById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: 'lkj12hg3kj1h2gk3j1h2g' }
      };
    });
    describe('When is invoked', () => {
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          User.findByIdAndUpdate.mockResolvedValue({ name: 'pepe' });

          await userController.updateUserById(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          User.findByIdAndUpdate.mockRejectedValue();

          await userController.updateUserById(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          User.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await userController.updateUserById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });

  describe('Given deleteOneById', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: 'lkj12hg3kj1h2gk3j1h2g' }
      };
    });
    describe('When is invoked', () => {
      describe('And User.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
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

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          User.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

          await userController.deleteOneById(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
