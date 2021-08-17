const gnomeController = require('./gnomeController');
const Gnome = require('../models/gnomeModels');

jest.mock('../models/gnomeModels');
let req;
let res;
describe('Given a getAll function', () => {
  describe('When getAll is invoked with valid arguments', () => {
    test('Then res.json() should be called', async () => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
      Gnome.find.mockResolvedValue([]);

      await gnomeController.getAll(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
describe('Given a createOne function', () => {
  describe('When createOne is invoked', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    test('Then res.send should be called with 500 ', async () => {
      Gnome.create.mockResolvedValue({ gnome: 'Pepa' });

      await gnomeController.createOne(req, res);

      expect(res.json).toHaveBeenCalledWith({ gnome: 'Pepa' });
    });
    test('Then res.send should be called with 500 ', async () => {
      Gnome.create.mockRejectedValue(new Error('No gnomes found'));

      await gnomeController.createOne(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send.mock.calls[0][0].message).toBe('No gnomes found');
    });
  });
});
