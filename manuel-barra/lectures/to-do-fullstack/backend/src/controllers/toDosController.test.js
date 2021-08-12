const toDosController = require('./toDosController');
const ToDo = require('../models/toDoModel');

jest.mock('../models/toDoModel');

describe('Given a getToDos function', () => {
  describe('When is invoked', () => {
    describe('And find is resolved', () => {
      test('Then the res.json() function is called', async () => {
        const req = { query: {} };
        const res = { json: jest.fn() };
        ToDo.find.mockResolvedValue({});

        await toDosController.getToDos(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And find is rejected', () => {
      test('Then the res.send() function is called', async () => {
        const req = { query: {} };
        const res = {
          send: jest.fn(),
          status: jest.fn()
        };
        ToDo.find.mockRejectedValue({});

        await toDosController.getToDos(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
