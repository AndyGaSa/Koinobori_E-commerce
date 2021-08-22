const { updateListbyId } = require('../controllers/taskList');

jest.mock('../controllers/taskList');
jest.mock('../models/task');
jest.mock('../models/taskList');

describe('Given an updateByList function', () => {
  describe('When called with valid params', () => {
    describe('And a body with the property "newTaskName', () => {
      test('Then res.render should be called with an object that has a property taskList', async () => {
        const req = {
          params: { taskListId: '' },
          body: { newTaskName: '' }
        };
        const res = {
          render: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        const Task = {
          create: jest.fn()
        };
        const TaskList = {
          findById: jest.fn()
        };
        Task.create().mockResolvedValue({ name: '' });
        TaskList.findById().mockResolvedValue({
          populate: jest.fn(),
          tasks: [],
          save: jest.fn()
        });
        await updateListbyId(req, res);

        expect(res.render).toHaveBeenCalledWith({ taskList: {} });
      });
    });
  });
});
