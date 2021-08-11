const { Error } = require('mongoose');
const controller = require('./todoController');
const toDo = require('../models/todoModel');

jest.mock('../models/todoModel');

describe('Given postTask function', () => {
  describe('When is triggered', () => {
    describe('And resolved', () => {
      // arrange
      test('Then call json', async () => {
        const req = { body: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockResolvedValue({});
        await controller.postTask(req, res);

        // assert
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
  describe('When is triggered', () => {
    describe('And rejected', () => {
      // arrange
      test('Then call json', async () => {
        const req = { body: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockRejectedValue({});
        await controller.postTask(req, res);

        // assert
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call json', async () => {
        const req = { body: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockRejectedValue({});
        await controller.postTask(req, res);

        // assert
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});

//--------------------------------------------

describe('Given getTasks function', () => {
  describe('When is triggered', () => {
    describe('And resolved', () => {
      // arrange
      test('Then call json', async () => {
        const req = { query: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockResolvedValue({});
        await controller.gestTasks(req, res);

        // assert
        expect(res.json).toHaveBeenCalled();
      });
    });
  });
  describe('When is triggered', () => {
    describe('And rejected', () => {
      // arrange
      test('Then call json', async () => {
        const req = { body: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockRejectedValue({});
        await controller.postTask(req, res);

        // assert
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then call json', async () => {
        const req = { body: {} };
        const res = {
          status: jest.fn(),
          json: jest.fn(),
          send: jest.fn(),
        };

        // act
        toDo.create.mockRejectedValue({});
        await controller.postTask(req, res);

        // assert
        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
