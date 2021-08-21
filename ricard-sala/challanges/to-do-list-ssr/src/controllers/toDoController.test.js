const toDoController = require('./toDoController');
const ToDo = require('../models/toDoModel');

jest.mock('../models/toDoModel');

describe('Given a creatTask function', () => {
  const req = {
    body: {},
  };
  const res = {

    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
  };

  describe('When is invoked', () => {
    test('Should call res.json', async () => {
      ToDo.create.mockResolvedValue();
      await toDoController.createTask(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is rejected', () => {
    test('Should call res.status(500)', async () => {
      ToDo.create.mockRejectedValue();
      await toDoController.createTask(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When is rejected', () => {
    test('Then res.send should have been called with an error "error"', async () => {
      ToDo.create.mockRejectedValue(new Error('error'));
      await toDoController.createTask(req, res);

      expect(res.send.mock.calls[1][0].message).toBe('error');
    });
  });
});
