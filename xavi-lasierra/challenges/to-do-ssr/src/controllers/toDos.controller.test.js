const {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo,
  completeToDo,
  uncompleteToDo
} = require('./toDos.controller');
const ToDo = require('../models/toDo.model');
const toDosMock = require('../mocks/toDos.mock');
const userMock = require('../mocks/user.mock');
const { userCheck } = require('./users.controller');

jest.mock('../models/toDo.model');
jest.mock('./users.controller');

describe('Given a getToDos function', () => {
  describe('When it is triggered', () => {
    test('Then should return the data find resolves with', async () => {
      ToDo.find.mockResolvedValue(toDosMock);

      const toDos = await getToDos();

      expect(toDos).toEqual(toDosMock);
    });
  });
});

describe('Given an addToDo function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        oidc: {
          user: userMock
        },
        body: {
          description: ''
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And description is a not empty string', () => {
      beforeEach(() => {
        req.body.description = 'New to do';
      });

      test('Then userCheck should have been called', async () => {
        userCheck.mockImplementation();

        await addToDo(req, res);

        expect(userCheck).toHaveBeenCalled();
      });
      describe('And userCheck is resolved', () => {
        beforeEach(() => {
          userCheck.mockResolvedValue(userMock);
        });

        describe('And create is resolved', () => {
          test('Then res.redirect should have been called with /', async () => {
            ToDo.create.mockResolvedValue({});

            await addToDo(req, res);

            expect(res.redirect).toHaveBeenCalledWith('/');
          });
        });

        describe('And create is rejected', () => {
          beforeEach(async () => {
            ToDo.create.mockRejectedValue(new Error('Server error'));

            await addToDo(req, res);
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

          await addToDo(req, res);
        });
        test('Then res.status should have been called with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send should have been called with an error with a message Server error', () => {
          expect(res.send.mock.calls[0][0].message).toBe('Server error');
        });
      });
    });
    describe('And description is a empty string', () => {
      beforeEach(async () => {
        req.body.description = '';

        userCheck.mockClear();
        userCheck.mockImplementation();

        await addToDo(req, res);
      });

      test('Then userCheck should have not been called', async () => {
        expect(userCheck).not.toHaveBeenCalled();
      });
      test('Then res.redirect should have been called with /', async () => {
        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });
  });
});

describe('Given an updateToDo function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        params: {
          toDoId: '1'
        },
        body: {
          description: 'New description'
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.redirect should have been called with /', async () => {
        ToDo.findByIdAndUpdate.mockResolvedValue({});

        await updateToDo(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });

    describe('And findByIdAndUpdate is rejected', () => {
      beforeEach(async () => {
        ToDo.findByIdAndUpdate.mockRejectedValue(new Error('Server error'));

        await updateToDo(req, res);
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

describe('Given an deleteToDo function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        params: {
          toDoId: '1'
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.redirect should have been called with /', async () => {
        ToDo.findByIdAndDelete.mockResolvedValue({});

        await deleteToDo(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });

    describe('And findByIdAndDelete is rejected', () => {
      beforeEach(async () => {
        ToDo.findByIdAndDelete.mockRejectedValue(new Error('Server error'));

        await deleteToDo(req, res);
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

describe('Given an completeToDo function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        params: {
          toDoId: '1'
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.redirect should have been called with /', async () => {
        ToDo.findByIdAndUpdate.mockResolvedValue({});

        await completeToDo(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });

    describe('And findByIdAndUpdate is rejected', () => {
      beforeEach(async () => {
        ToDo.findByIdAndUpdate.mockRejectedValue(new Error('Server error'));

        await completeToDo(req, res);
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

describe('Given an uncompleteToDo function', () => {
  describe('When it is triggered', () => {
    let req;
    let res;
    beforeEach(() => {
      req = {
        params: {
          toDoId: '1'
        }
      };
      res = {
        redirect: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.redirect should have been called with /', async () => {
        ToDo.findByIdAndUpdate.mockResolvedValue({});

        await uncompleteToDo(req, res);

        expect(res.redirect).toHaveBeenCalledWith('/');
      });
    });

    describe('And findByIdAndUpdate is rejected', () => {
      beforeEach(async () => {
        ToDo.findByIdAndUpdate.mockRejectedValue(new Error('Server error'));

        await uncompleteToDo(req, res);
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
