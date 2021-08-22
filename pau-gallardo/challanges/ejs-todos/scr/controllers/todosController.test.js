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
    describe('And rejectes', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          body: { content: {} },
        };
        const res = {
          status: jest.fn(),
        };

        Todo.create.mockRejectedValue({});
        await controller.postTodo(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a getTodos function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          body: { content: {} },
        };
        const res = {
          status: jest.fn(),
          render: jest.fn(),
        };

        Todo.find.mockResolvedValue({});
        await controller.getTodos(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          body: { content: {} },
        };
        const res = {
          status: jest.fn(),
        };

        Todo.find.mockRejectedValue({});
        await controller.getTodos(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a deleteTodos function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          params: { todoId: {} },
        };
        const res = {
          status: jest.fn(),
          redirect: jest.fn(),
        };

        Todo.findByIdAndDelete.mockResolvedValue({});
        await controller.deleteTodo(req, res);

        expect(res.status).toHaveBeenCalled();
        expect(res.redirect).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          params: { todoId: {} },
        };
        const res = {
          status: jest.fn(),
          render: jest.fn(),
        };

        Todo.findByIdAndDelete.mockRejectedValue({});
        await controller.deleteTodo(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});

describe('Given a updateTodo function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          params: { todoId: {} },
        };
        const res = {
          redirect: jest.fn(),
          status: jest.fn(),
        };

        Todo.findById.mockResolvedValue({});
        await controller.updateTodo(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
    describe('And rejectes', () => {
      test('Then res.status should have been called', async () => {
        const req = {
          params: { todoId: {} },
        };
        const res = {
          status: jest.fn(),
          render: jest.fn(),
        };

        Todo.findById.mockRejectedValue({});
        await controller.updateTodo(req, res);

        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});
