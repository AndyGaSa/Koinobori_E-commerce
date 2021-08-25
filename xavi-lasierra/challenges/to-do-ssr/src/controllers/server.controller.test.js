const {
  mainPage,
  restricted
} = require('./server.controller');
const { userCheck } = require('./users.controller');
const { getToDos } = require('./toDos.controller');
const userMock = require('../mocks/user.mock');
const toDosMock = require('../mocks/toDos.mock');

jest.mock('./users.controller');
jest.mock('./toDos.controller');

describe('Given a mainPage function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        oidc: {
          isAuthenticated: jest.fn(),
          user: userMock
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
        render: jest.fn()
      };
    });

    describe('And the user is not authenticated', () => {
      test('Then res.redirect should have been called with /restricted', async () => {
        req.oidc.isAuthenticated.mockReturnValue(false);

        await mainPage(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/restricted');
      });
    });

    describe('And the user is authenticated', () => {
      beforeEach(() => {
        req.oidc.isAuthenticated.mockReturnValue(true);
      });

      describe('And userCheck is resolved', () => {
        beforeEach(() => {
          userCheck.mockResolvedValue(userMock);
        });

        describe('And getToDos is resolved', () => {
          ['index', { isAuthenticated: true, user: userMock, toDos: toDosMock }].forEach((argument, index) => {
            test(`Then res.render should have been called with the ${index} argument ${argument}`, async () => {
              getToDos.mockResolvedValue(toDosMock);

              await mainPage(req, res);

              expect(res.render.mock.calls[0][index]).toEqual(argument);
            });
          });
        });

        describe('And getToDos is rejected', () => {
          beforeEach(async () => {
            getToDos.mockRejectedValue(new Error('Server error'));

            await mainPage(req, res);
          });
          test('Then res.status should have been called with 500', () => {
            expect(res.status).toHaveBeenCalledWith(500);
          });

          test('Then res.send should have been called with an error with a message Server error', () => {
            expect(res.send.mock.calls[0][0].message).toBe('Server error');
          });
        });
      });

      describe('And userCheck is rejected', () => {
        beforeEach(async () => {
          userCheck.mockRejectedValue(new Error('Server error'));

          await mainPage(req, res);
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

describe('Given a restricted function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        oidc: {
          isAuthenticated: jest.fn()
        }
      };
      res = {
        render: jest.fn(),
        redirect: jest.fn()
      };
    });

    describe('And the user is Authenticated', () => {
      test('Then res.redirect should have been called with /', () => {
        req.oidc.isAuthenticated.mockReturnValue(true);

        restricted(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });

    describe('And the user is not Authenticated', () => {
      ['restricted', { isAuthenticated: false }].forEach((argument, index) => {
        test(`Then res.render should have been called with ${argument} as argument ${index}`, () => {
          req.oidc.isAuthenticated.mockReturnValue(false);

          restricted(req, res);

          expect(res.render.mock.calls[0][index]).toEqual(argument);
        });
      });
    });
  });
});
