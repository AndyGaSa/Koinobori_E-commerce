const { userCheck } = require('./users.controller');
const User = require('../models/user.model');
const userMock = require('../mocks/user.mock');

jest.mock('../models/user.model');

describe('Given a userCheck function', () => {
  describe('When it is triggered', () => {
    let res;

    describe('And findOneAndUpdate is resolved with null', () => {
      beforeEach(() => {
        res = {
          status: jest.fn(),
          send: jest.fn()
        };
        User.findOneAndUpdate.mockResolvedValue(null);
      });

      test('Then User.create should have been called', async () => {
        User.create = jest.fn();

        await userCheck(userMock, res);

        expect(User.create).toHaveBeenCalled();
      });

      describe('And create is resolved with an object', () => {
        test('Then userCheck should return that same object', async () => {
          User.create.mockResolvedValue(userMock);

          const newUser = await userCheck(userMock, res);

          expect(newUser).toEqual(userMock);
        });
      });

      describe('And create is rejected with an error', () => {
        beforeEach(async () => {
          User.create.mockRejectedValue(new Error('Server error'));

          await userCheck(userMock, res);
        });
        test('Then res.status should have been called with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send should have been called with an error with a message Server error', () => {
          expect(res.send.mock.calls[0][0].message).toBe('Server error');
        });
      });
    });
  });
});
