const controller = require('./todosController');
const Todo = require('../models/todoModel');

jest.mock('../models/todoModel');

describe('Given a postTodo function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          body: { content: {} },
        };
        const res = {
          status: jest.fn(),
          redirect: jest.fn(),
        };

        Todo.create.mockResolvedValue({});
        await controller.postTodo(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});
