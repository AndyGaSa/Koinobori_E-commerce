const { updateTaskList } = require('../controllers/taskList');
const Task = require('../models/task');
const TaskList = require('../models/taskList');

jest.mock('../models/task');
jest.mock('../models/taskList');

describe('Given an updateTaskList', () => {
  describe('When is called with valid params', () => {
    describe('And a body with a property newTaskName', () => {
      test('Then res.render should be called with an object that has a property tasklist', async () => {
        const req = {
          params: {
            taskListId: ''
          },
          body: {
            newTaskName: ''
          }
        };
        const res = {
          render: jest.fn(),
          status: jest.fn(),
          send: jest.fn()
        };
        Task.create.mockResolvedValue({ name: req.body.newTaskName });
        TaskList.findById.mockReturnValue({
          populate: jest.fn().mockResolvedValue({
            tasks: [],
            save: jest.fn()
          })
        });

        await updateTaskList(req, res);

        expect(res.render).toHaveBeenCalled();
      });
    });
  });
});
